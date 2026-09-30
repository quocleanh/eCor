// "Lưu đọc lại" cho bài kiến thức — chỉ lưu trên trình duyệt (localStorage),
// không đồng bộ tài khoản. Mỗi bài chỉ cần slug là đủ để hiển thị lại link.
const STORAGE_KEY = 'ecor-kien-thuc-saved'

function readAll() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeAll(list) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    // Trình duyệt chặn localStorage (chế độ ẩn danh...) — bỏ qua, không chặn trải nghiệm
  }
}

export function useReadingList(slug) {
  const isSaved = ref(false)

  onMounted(() => {
    isSaved.value = readAll().some(s => s === slug)
  })

  function toggle() {
    const list = readAll()
    const i = list.indexOf(slug)
    if (i >= 0) {
      list.splice(i, 1)
      isSaved.value = false
    } else {
      list.push(slug)
      isSaved.value = true
    }
    writeAll(list)
  }

  return { isSaved, toggle }
}
