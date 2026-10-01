#!/usr/bin/env python3
"""Convert Markdown sang PDF — hỗ trợ đầy đủ tiếng Việt.

Dùng fpdf2 + markdown: thuần Python, không cần GTK/Cairo/wkhtmltopdf nên chạy được
ngay trên Windows.

Cài một lần:
    python -m pip install fpdf2 markdown

Cách dùng:
    python md2pdf.py                          # convert mọi .md trong thư mục này -> pdf/
    python md2pdf.py README.md                # convert 1 file
    python md2pdf.py 01-*.md 02-*.md          # convert nhiều file
    python md2pdf.py --merge                  # gộp tất cả thành 1 file PDF duy nhất
    python md2pdf.py . -o build/pdf           # chỉ định thư mục nguồn và đích
    python md2pdf.py --merge -o out --name KB # gộp, đặt tên file ra là KB.pdf

Tham số:
    paths        File .md, pattern glob, hoặc thư mục. Bỏ trống = thư mục chứa script này.
    -o, --out    Thư mục xuất PDF (mặc định: <thư mục nguồn>/pdf)
    --merge      Gộp tất cả file thành một PDF (theo thứ tự tên file)
    --name       Tên file khi dùng --merge (mặc định: merged)
    --font       Tên font hoặc đường dẫn .ttf (mặc định: tự tìm Arial/Segoe UI/DejaVu)
    --size       Cỡ chữ thân bài, pt (mặc định: 10)
"""

from __future__ import annotations

import argparse
import glob
import logging
import re
import sys
from pathlib import Path

try:
    import markdown
    from fpdf import FPDF
except ImportError as exc:  # pragma: no cover
    sys.exit(f"Thiếu thư viện: {exc.name}. Chạy: python -m pip install fpdf2 markdown")

# fontTools cảnh báo về vài bảng font của Arial không subset được — vô hại, tắt cho gọn log.
logging.getLogger("fontTools").setLevel(logging.ERROR)
logging.getLogger("fontTools.subset").setLevel(logging.ERROR)


# --- Font: cần TTF Unicode, font core của PDF không có tiếng Việt ----------------

# Mỗi bộ: (regular, bold, italic, bold-italic). Thử lần lượt, lấy bộ đầu tiên đủ file.
FONT_CANDIDATES = [
    ("Arial", ("arial.ttf", "arialbd.ttf", "ariali.ttf", "arialbi.ttf")),
    ("SegoeUI", ("segoeui.ttf", "segoeuib.ttf", "segoeuii.ttf", "segoeuiz.ttf")),
    ("DejaVuSans", ("DejaVuSans.ttf", "DejaVuSans-Bold.ttf",
                    "DejaVuSans-Oblique.ttf", "DejaVuSans-BoldOblique.ttf")),
    ("NotoSans", ("NotoSans-Regular.ttf", "NotoSans-Bold.ttf",
                  "NotoSans-Italic.ttf", "NotoSans-BoldItalic.ttf")),
]

MONO_CANDIDATES = [
    ("Consolas", ("consola.ttf", "consolab.ttf", "consolai.ttf", "consolaz.ttf")),
    ("DejaVuSansMono", ("DejaVuSansMono.ttf", "DejaVuSansMono-Bold.ttf",
                        "DejaVuSansMono-Oblique.ttf", "DejaVuSansMono-BoldOblique.ttf")),
]

FONT_DIRS = [
    Path("C:/Windows/Fonts"),
    Path.home() / "AppData/Local/Microsoft/Windows/Fonts",
    Path("/usr/share/fonts"),
    Path("/usr/local/share/fonts"),
    Path.home() / ".fonts",
    Path("/Library/Fonts"),
    Path("/System/Library/Fonts"),
]


def find_font_file(name: str) -> Path | None:
    """Tìm file font theo tên, kể cả trong thư mục con."""
    for directory in FONT_DIRS:
        if not directory.is_dir():
            continue
        direct = directory / name
        if direct.is_file():
            return direct
        try:
            for found in directory.rglob(name):
                return found
        except (OSError, PermissionError):
            continue
    return None


def resolve_family(candidates: list[tuple[str, tuple[str, ...]]]) -> tuple[str, list[Path | None]] | None:
    """Chọn bộ font đầu tiên tìm được file regular; thiếu bold/italic thì dùng regular."""
    for family, files in candidates:
        paths = [find_font_file(f) for f in files]
        if paths[0] is not None:
            return family, [p or paths[0] for p in paths]
    return None


def register_fonts(pdf: FPDF, font_arg: str | None) -> tuple[str, str]:
    """Nạp font Unicode vào PDF. Trả về (family thân bài, family mono)."""
    body = None

    if font_arg:
        as_path = Path(font_arg)
        if as_path.is_file():  # người dùng chỉ thẳng file .ttf
            family = as_path.stem
            pdf.add_font(family, "", str(as_path))
            for style in ("B", "I", "BI"):
                pdf.add_font(family, style, str(as_path))
            body = family
        else:  # người dùng cho tên font, thử tìm theo quy ước tên file
            guess = font_arg.replace(" ", "")
            found = resolve_family([(guess, (f"{guess}.ttf", f"{guess}-Bold.ttf",
                                             f"{guess}-Italic.ttf", f"{guess}-BoldItalic.ttf"))])
            if found:
                body = add_family(pdf, *found)
            else:
                print(f"  ! Không tìm thấy font '{font_arg}', dùng font mặc định.", file=sys.stderr)

    if body is None:
        found = resolve_family(FONT_CANDIDATES)
        if not found:
            sys.exit(
                "Không tìm thấy font TTF Unicode nào trên máy.\n"
                "Tải DejaVuSans.ttf (https://dejavu-fonts.github.io) rồi chạy lại với --font <đường dẫn .ttf>"
            )
        body = add_family(pdf, *found)

    mono_found = resolve_family(MONO_CANDIDATES)
    mono = add_family(pdf, *mono_found) if mono_found else body
    return body, mono


def add_family(pdf: FPDF, family: str, paths: list[Path | None]) -> str:
    for style, path in zip(("", "B", "I", "BI"), paths):
        if path:
            pdf.add_font(family, style, str(path))
    return family


# --- PDF: header/footer -----------------------------------------------------------

class MarkdownPDF(FPDF):
    def __init__(self, body_font: str = "Helvetica", title: str = "", **kw):
        super().__init__(**kw)
        self.body_font = body_font
        self.doc_title = title

    def footer(self):
        self.set_y(-14)
        self.set_font(self.body_font, "", 7.5)
        self.set_text_color(130)
        left = self.doc_title[:70]
        self.cell(0, 6, left, align="L")
        self.set_x(self.l_margin)
        self.cell(0, 6, f"{self.page_no()}/{{nb}}", align="R")
        self.set_text_color(0)


# --- Markdown -> HTML -------------------------------------------------------------

MD_EXTENSIONS = ["tables", "fenced_code", "sane_lists", "attr_list"]

TAG_RE = re.compile(r"<[^>]+>")
CELL_RE = re.compile(r"(<(t[dh])\b[^>]*>)(.*?)(</\2>)", re.DOTALL)
# fenced code sinh <pre><code class="language-bash"> -> gộp thành <pre> đơn giản
PRE_OPEN_RE = re.compile(r"<pre[^>]*>\s*<code[^>]*>")
PRE_CLOSE_RE = re.compile(r"</code>\s*</pre>")
CODE_OPEN_RE = re.compile(r"<code[^>]*>")

# Emoji và ký hiệu không có trong font văn bản thông thường -> đổi sang chữ/ký tự tương đương.
SYMBOL_MAP = {
    "⭐": "*", "✓": "v", "✔": "v", "✗": "x", "⚠️": "!", "⚠": "!",
    "📞": "", "✉️": "", "✉": "", "🏢": "", "📊": "", "📚": "", "🤝": "", "🔒": "", "⚡": "", "✨": "",
}
# Dọn các dải emoji còn lại (pictograph, symbol, flag, variation selector).
EMOJI_RE = re.compile(
    "[" "\U0001F300-\U0001FAFF" "\U0001F000-\U0001F2FF"
    "\U00002700-\U000027BF" "\U0000FE0F" "\U0000200D" "]"
)


def _flatten_cell(m: re.Match[str]) -> str:
    """fpdf2 không render được thẻ lồng trong <td>/<th> -> bỏ markup, giữ chữ."""
    inner = m.group(3).replace("<br>", " ").replace("<br/>", " ").replace("<br />", " ")
    return m.group(1) + TAG_RE.sub("", inner).strip() + m.group(4)


def sanitize(text: str) -> str:
    """Thay emoji/ký hiệu mà font hệ thống không có glyph, tránh ô vuông trống trong PDF."""
    for src, dst in SYMBOL_MAP.items():
        text = text.replace(src, dst)
    return EMOJI_RE.sub("", text)


def md_to_html(text: str) -> str:
    html = markdown.markdown(sanitize(text), extensions=MD_EXTENSIONS)
    # fpdf2 không hiểu <code> lồng trong <pre>, và bỏ qua thẻ không hỗ trợ ->
    # chuẩn hóa vài thẻ cho ra kết quả đẹp hơn.
    html = PRE_CLOSE_RE.sub("</pre>", PRE_OPEN_RE.sub("<pre>", html))
    html = html.replace("<strong>", "<b>").replace("</strong>", "</b>")
    html = html.replace("<em>", "<i>").replace("</em>", "</i>")
    html = CODE_OPEN_RE.sub("<b>", html).replace("</code>", "</b>")
    return CELL_RE.sub(_flatten_cell, html)


def title_of(path: Path, text: str) -> str:
    """Lấy H1 đầu tiên làm tiêu đề, không có thì dùng tên file."""
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return path.stem


def render(pdf: MarkdownPDF, path: Path, body_font: str, mono_font: str, size: float) -> None:
    text = path.read_text(encoding="utf-8")
    pdf.add_page()
    pdf.set_font(body_font, "", size)
    html = md_to_html(text)
    try:  # fpdf2 >= 2.7.9: font cho <pre>/<code> đặt qua tag_styles
        from fpdf import FontFace

        mono = FontFace(family=mono_font)
        pdf.write_html(html, font_family=body_font, tag_styles={"pre": mono, "code": mono})
    except (TypeError, ImportError):
        try:  # fpdf2 cũ hơn
            pdf.write_html(html, pre_code_font=mono_font)
        except TypeError:
            pdf.write_html(html)


def new_pdf(body_font_arg: str | None, title: str, size: float) -> tuple[MarkdownPDF, str, str]:
    pdf = MarkdownPDF(title=title, format="A4", unit="mm")
    pdf.set_margins(16, 15, 16)
    pdf.set_auto_page_break(auto=True, margin=18)
    body, mono = register_fonts(pdf, body_font_arg)
    pdf.body_font = body
    pdf.set_font(body, "", size)
    pdf.alias_nb_pages()
    pdf.set_title(title)
    return pdf, body, mono


# --- CLI ---------------------------------------------------------------------------

def collect(paths: list[str], default_dir: Path) -> list[Path]:
    if not paths:
        return sorted(default_dir.glob("*.md"))
    files: list[Path] = []
    for raw in paths:
        p = Path(raw)
        if p.is_dir():
            files += sorted(p.glob("*.md"))
        elif p.is_file():
            files.append(p)
        else:
            matched = [Path(m) for m in glob.glob(raw)]
            if not matched:
                print(f"  ! Không tìm thấy: {raw}", file=sys.stderr)
            files += sorted(m for m in matched if m.suffix.lower() == ".md")
    # bỏ trùng, giữ thứ tự
    return list(dict.fromkeys(files))


def main() -> int:
    here = Path(__file__).resolve().parent
    ap = argparse.ArgumentParser(
        description="Convert Markdown sang PDF (hỗ trợ tiếng Việt).",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    ap.add_argument("paths", nargs="*", help="File .md, pattern glob, hoặc thư mục")
    ap.add_argument("-o", "--out", help="Thư mục xuất PDF (mặc định: <nguồn>/pdf)")
    ap.add_argument("--merge", action="store_true", help="Gộp tất cả thành một PDF")
    ap.add_argument("--name", default="merged", help="Tên file khi --merge")
    ap.add_argument("--font", help="Tên font hoặc đường dẫn .ttf")
    ap.add_argument("--size", type=float, default=10, help="Cỡ chữ thân bài (pt)")
    args = ap.parse_args()

    files = collect(args.paths, here)
    if not files:
        print("Không có file .md nào để convert.", file=sys.stderr)
        return 1

    out_dir = Path(args.out) if args.out else (files[0].parent / "pdf")
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.merge:
        pdf, body, mono = new_pdf(args.font, args.name, args.size)
        for f in files:
            print(f"  + {f.name}")
            render(pdf, f, body, mono, args.size)
        target = out_dir / f"{args.name}.pdf"
        pdf.output(str(target))
        print(f"\nXong: {target}  ({len(files)} file, {target.stat().st_size // 1024} KB)")
        return 0

    total = 0
    for f in files:
        text = f.read_text(encoding="utf-8")
        pdf, body, mono = new_pdf(args.font, title_of(f, text), args.size)
        render(pdf, f, body, mono, args.size)
        target = out_dir / f"{f.stem}.pdf"
        pdf.output(str(target))
        kb = target.stat().st_size // 1024
        total += 1
        print(f"  {f.name}  ->  {target.name}  ({kb} KB)")

    print(f"\nXong: {total} file PDF trong {out_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
