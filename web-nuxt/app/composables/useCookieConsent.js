// Nguồn duy nhất cho quyết định cookie của khách + nạp các script bị gate theo quyết định đó.
//
// Google Analytics và chat widget Chatbase CHỈ được nạp sau khi khách bấm "Đồng ý".
// Vì vậy chúng không còn nằm trong app.head của nuxt.config.ts — đặt ở đó là nạp vô điều kiện,
// khiến nút "Từ chối" trên banner chỉ còn là hình thức.

const CONSENT_KEY = 'ecor_cookie_consent'
const GA_ID = 'G-R12ZDPKS0D'
const CHATBASE_ID = 'rtbRqIiuA1U_XOmKeH5oE'

// Chặn nạp hai lần (ví dụ khách bấm Đồng ý ngay sau khi script đã nạp từ lần truy cập trước).
let loaded = false

function loadGtag() {
  window.dataLayer = window.dataLayer || []
  // Phải giữ đúng dạng `arguments` của gtag, không đổi thành rest param.
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID)

  const el = document.createElement('script')
  el.async = true
  el.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(el)
}

function loadChatbase() {
  // Hàng đợi tạm: cho phép gọi window.chatbase(...) trước khi embed.min.js nạp xong.
  // (Bản gốc của Chatbase đặt tên tham số là `arguments` — không dùng được trong ES module
  // vì đây là strict mode, nên viết lại bằng rest param, hành vi giữ nguyên.)
  if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
    const stub = (...args) => {
      if (!stub.q) stub.q = []
      stub.q.push(args)
    }
    window.chatbase = new Proxy(stub, {
      get(target, prop) {
        if (prop === 'q') return target.q
        return (...args) => target(prop, ...args)
      },
    })
  }

  const el = document.createElement('script')
  el.src = 'https://www.chatbase.co/embed.min.js'
  el.id = CHATBASE_ID
  el.domain = 'www.chatbase.co'
  document.body.appendChild(el)
}

/** Nạp toàn bộ script cần sự đồng ý. An toàn khi gọi nhiều lần. */
function loadConsentedScripts() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  loadGtag()
  loadChatbase()
}

export function useCookieConsent() {
  /** 'accepted' | 'declined' | null (chưa chọn). Trả null nếu localStorage bị chặn. */
  const read = () => {
    try {
      return localStorage.getItem(CONSENT_KEY)
    } catch {
      return null
    }
  }

  const save = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value)
    } catch {
      // Chế độ ẩn danh hoặc bị chặn cookie: không lưu được thì thôi, banner sẽ hiện lại lần sau.
    }
  }

  return {
    CONSENT_KEY,
    read,
    /** Gọi khi khách bấm Đồng ý: lưu lựa chọn rồi nạp script ngay trong phiên này. */
    accept() {
      save('accepted')
      loadConsentedScripts()
    },
    /** Gọi khi khách bấm Từ chối: chỉ lưu lựa chọn, không nạp gì. */
    decline() {
      save('declined')
    },
    /** Gọi lúc mount: khách đã đồng ý từ trước thì nạp lại script cho phiên mới. */
    loadIfAccepted() {
      if (read() === 'accepted') loadConsentedScripts()
    },
    /** Xóa lựa chọn cũ để banner hiện lại (dùng cho link "Cài đặt cookie" nếu cần). */
    reset() {
      try {
        localStorage.removeItem(CONSENT_KEY)
      } catch {
        // bỏ qua
      }
    },
  }
}
