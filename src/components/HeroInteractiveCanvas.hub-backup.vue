<!--
  BACKUP — hub-and-spoke version of the hero canvas.
  Kept here so it can be restored by copying this file's content back into
  HeroInteractiveCanvas.vue if the newer "orbit" version isn't preferred.
  Not imported anywhere; safe to keep around.
-->
<template>
  <div class="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-white border border-zinc-100 shadow-xl overflow-hidden" ref="containerRef">
    <!-- Overlay texts -->
    <div class="absolute top-0 left-0 w-full p-5 flex items-center justify-between text-xs z-10 pointer-events-none">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-200/60 shadow-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
        Seamless Integration
      </span>
      <span class="text-[11px] font-semibold text-zinc-400">
        WMS - TMS - POS - Account
      </span>
    </div>

    <canvas
      ref="canvasRef"
      class="absolute inset-0 w-full h-full z-0"
    ></canvas>

    <div class="absolute bottom-0 left-0 w-full p-5 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-100/50 bg-white/50 backdrop-blur-sm z-10 pointer-events-none">
      <span class="flex items-center gap-1 text-sky-600 font-medium">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Real-time API
      </span>
      <span class="font-bold text-zinc-700">Latency < 0.1s</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const containerRef = ref(null)
const canvasRef = ref(null)

let ctx = null
let animationFrameId = null
let width = 0
let height = 0
let time = 0
let lastFrameAt = 0

const resize = () => {
  if (!containerRef.value || !canvasRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  width = rect.width
  height = rect.height
  const dpr = window.devicePixelRatio || 1
  canvasRef.value.width = width * dpr
  canvasRef.value.height = height * dpr
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.scale(dpr, dpr)
}

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2

// Hub-and-spoke: one eCor core in the center, 4 modules orbiting around it.
// Spokes never cross, which keeps the whole thing calm even with 4 modules.
const getCore = () => ({ x: width * 0.5, y: height * 0.5 })

const getNodes = () => ([
  { id: 'pos', x: width * 0.5, y: height * 0.17, color: '#10b981', light: '#6ee7b7', shadow: 'rgba(16, 185, 129, 0.4)', title: 'POS', subtitle: 'Retail' },
  { id: 'tms', x: width * 0.83, y: height * 0.5, color: '#0ea5e9', light: '#7dd3fc', shadow: 'rgba(14, 165, 233, 0.4)', title: 'TMS', subtitle: 'Transport' },
  { id: 'account', x: width * 0.5, y: height * 0.83, color: '#fb7185', light: '#fda4af', shadow: 'rgba(244, 63, 94, 0.4)', title: 'Account', subtitle: 'Bookkeeping' },
  { id: 'wms', x: width * 0.17, y: height * 0.5, color: '#f59e0b', light: '#fcd34d', shadow: 'rgba(245, 158, 11, 0.4)', title: 'WMS', subtitle: 'Warehouse' }
])

const drawConnection = (x1, y1, x2, y2) => {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = '#e2e8f0'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 5])
  ctx.stroke()
  ctx.setLineDash([])
}

// A single glowing particle drifting along a spoke, softly pulsing so the motion reads as smooth.
const drawParticle = (x1, y1, x2, y2, color, t) => {
  const px = x1 + (x2 - x1) * t
  const py = y1 + (y2 - y1) * t

  const pulse = easeInOutSine(Math.sin(t * Math.PI))
  const radius = 2 + pulse * 1.2
  const alpha = 0.55 + pulse * 0.45

  ctx.beginPath()
  ctx.arc(px, py, radius, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.globalAlpha = alpha
  ctx.shadowColor = color
  ctx.shadowBlur = 9
  ctx.fill()
  ctx.shadowBlur = 0
  ctx.globalAlpha = 1
}

const drawNode = (x, y, colorCode, shadowColor, title, subtitle, size) => {
  ctx.save()
  ctx.shadowColor = shadowColor
  ctx.shadowBlur = 18
  ctx.fillStyle = '#18181b'
  ctx.beginPath()
  ctx.roundRect(x - size / 2, y - size / 2, size, size, 16)
  ctx.fill()

  ctx.shadowBlur = 0
  ctx.fillStyle = '#ffffff'
  ctx.font = `bold ${size >= 70 ? 14 : 13}px system-ui`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(title, x, y - 6)
  ctx.fillStyle = colorCode
  ctx.font = '500 8px system-ui'
  ctx.fillText(subtitle, x, y + 9)
  ctx.restore()
}

const draw = (now) => {
  if (!ctx) return

  // Frame-rate independent timing so the motion feels the same on 60Hz and 120Hz
  // screens, with no jump after the tab has been backgrounded.
  const dt = lastFrameAt ? Math.min((now - lastFrameAt) / 1000, 1 / 30) : 1 / 60
  lastFrameAt = now
  time += dt * 0.25

  ctx.clearRect(0, 0, width, height)

  const core = getCore()
  const nodes = getNodes()

  // Soft ambient glow behind the core to anchor the composition
  const glow = ctx.createRadialGradient(core.x, core.y, 4, core.x, core.y, 90)
  glow.addColorStop(0, 'rgba(245, 158, 11, 0.16)')
  glow.addColorStop(1, 'rgba(245, 158, 11, 0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(core.x, core.y, 90, 0, Math.PI * 2)
  ctx.fill()

  nodes.forEach((n) => drawConnection(core.x, core.y, n.x, n.y))

  // Two particles per spoke, offset so the flow feels continuous rather than ticking
  nodes.forEach((n, i) => {
    const tOut = (time + i * 0.22) % 1
    const tIn = (time + i * 0.22 + 0.5) % 1
    drawParticle(core.x, core.y, n.x, n.y, n.color, tOut)
    drawParticle(n.x, n.y, core.x, core.y, n.color, tIn)
  })

  nodes.forEach((n) => drawNode(n.x, n.y, n.light, n.shadow, n.title, n.subtitle, 56))
  drawNode(core.x, core.y, '#fbbf24', 'rgba(245, 158, 11, 0.45)', 'eCor', 'Cloud Core', 68)

  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    resize()
    window.addEventListener('resize', resize)
    animationFrameId = requestAnimationFrame(draw)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>
