export function useContactModal() {
  const isOpen = useState('contact-modal-open', () => false)
  const type = useState('contact-modal-type', () => 'demo')
  const moduleName = useState('contact-modal-module', () => 'all')

  function openModal(options = {}) {
    type.value = options.type ?? 'demo'
    moduleName.value = options.moduleName ?? 'all'
    isOpen.value = true
  }

  function closeModal() {
    isOpen.value = false
  }

  return { isOpen, type, moduleName, openModal, closeModal }
}
