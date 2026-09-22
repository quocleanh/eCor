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
  buildStars()
}

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2

// Orbit system: the 4 modules slowly revolve around the eCor core like a
// pinwheel, always 90° apart so their paths never collide. Each one trails a
// soft comet tail, which is what makes the motion the whole point rather
// than a static diagram with moving dots on top of it.
const MODULES = [
  { id: 'pos', color: '#10b981', light: '#6ee7b7', shadow: 'rgba(16, 185, 129, 0.4)', title: 'POS', subtitle: 'Retail' },
  { id: 'tms', color: '#0ea5e9', light: '#7dd3fc', shadow: 'rgba(14, 165, 233, 0.4)', title: 'TMS', subtitle: 'Transport' },
  { id: 'account', color: '#fb7185', light: '#fda4af', shadow: 'rgba(244, 63, 94, 0.4)', title: 'Account', subtitle: 'Bookkeeping' },
  { id: 'wms', color: '#f59e0b', light: '#fcd34d', shadow: 'rgba(245, 158, 11, 0.4)', title: 'WMS', subtitle: 'Warehouse' }
]

const getCore = () => ({ x: width * 0.5, y: height * 0.5 })
const getOrbitRadius = () => Math.min(width, height) * 0.33

// Background star field: a handful of fixed points that twinkle gently.
// Regenerated whenever the canvas is (re)sized, using its actual pixel size.
let stars = []
const buildStars = () => {
  const count = 22
  const core = getCore()
  const minSide = Math.min(width, height)
  stars = Array.from({ length: count }, () => {
    let x, y, dist
    do {
      x = Math.random() * width
      y = Math.random() * height
      dist = Math.hypot(x - core.x, y - core.y)
    } while (dist < minSide * 0.16) // keep clear of the core label
    return { x, y, r: 0.6 + Math.random() * 1.1, phase: Math.random() * Math.PI * 2, speed: 0.6 + Math.random() * 0.8 }
  })
}

const drawStars = () => {
  stars.forEach((s) => {
    const alpha = 0.15 + (Math.sin(time * s.speed + s.phase) + 1) / 2 * 0.35
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = '#f59e0b'
    ctx.globalAlpha = alpha
    ctx.fill()
  })
  ctx.globalAlpha = 1
}

// A plain, thin guide ring — used for the auxiliary rings that just add depth.
const drawAuxRing = (core, radius, alpha, lineWidth = 0.75) => {
  ctx.beginPath()
  ctx.arc(core.x, core.y, radius, 0, Math.PI * 2)
  ctx.strokeStyle = `rgba(203, 213, 225, ${alpha})`
  ctx.lineWidth = lineWidth
  ctx.setLineDash([2, 6])
  ctx.stroke()
  ctx.setLineDash([])
}

// The main orbit ring the 4 modules actually travel on — thin, like the
// auxiliary rings, just slightly more solid so it still reads as the path.
const drawOrbitRing = (core, radius) => {
  ctx.beginPath()
  ctx.arc(core.x, core.y, radius, 0, Math.PI * 2)
  ctx.strokeStyle = '#eef2f7'
  ctx.lineWidth = 1.5
  ctx.setLineDash([3, 7])
  ctx.stroke()
  ctx.setLineDash([])
}

// A bright dot gliding along the main orbit's circumference, weaving past the
// 4 modules — this is what visually "links" them to each other, separate
// from the spokes that link each one back to the core.
const drawRingPulse = (core, radius, angle, color) => {
  const px = core.x + Math.cos(angle) * radius
  const py = core.y + Math.sin(angle) * radius
  ctx.beginPath()
  ctx.arc(px, py, 2.4, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.shadowColor = color
  ctx.shadowBlur = 10
  ctx.fill()
  ctx.shadowBlur = 0
}

const drawSpoke = (core, x, y) => {
  ctx.beginPath()
  ctx.moveTo(core.x, core.y)
  ctx.lineTo(x, y)
  ctx.strokeStyle = '#e2e8f0'
  ctx.lineWidth = 1.5
  ctx.stroke()
}

// A short trail of fading, shrinking dots behind the module, following the
// same circular path — the "comet tail".
const drawTrail = (core, radius, angle, color) => {
  const trailCount = 7
  const step = 0.055
  for (let k = 1; k <= trailCount; k++) {
    const a = angle - k * step
    const tx = core.x + Math.cos(a) * radius
    const ty = core.y + Math.sin(a) * radius
    const fade = 1 - k / (trailCount + 1)
    ctx.beginPath()
    ctx.arc(tx, ty, 3.2 * fade, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.globalAlpha = fade * 0.35
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

// A glowing pulse traveling inward/outward along the spoke, in sync with the
// module's own orbit so the whole thing reads as one continuous current.
const drawSpokePulse = (core, x, y, color, t) => {
  const px = core.x + (x - core.x) * t
  const py = core.y + (y - core.y) * t
  const pulse = easeInOutSine(Math.sin(t * Math.PI))

  ctx.beginPath()
  ctx.arc(px, py, 2 + pulse * 1.2, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.globalAlpha = 0.55 + pulse * 0.45
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

  // Frame-rate independent timing so the motion feels the same on 60Hz and
  // 120Hz screens, with no jump after the tab has been backgrounded.
  const dt = lastFrameAt ? Math.min((now - lastFrameAt) / 1000, 1 / 30) : 1 / 60
  lastFrameAt = now
  time += dt

  ctx.clearRect(0, 0, width, height)

  const core = getCore()
  const radius = getOrbitRadius()
  const rotation = time * 0.18 // ~35s per full revolution — slow and calm

  drawStars()

  // Soft ambient glow that breathes gently behind the core
  const breathe = 0.14 + easeInOutSine((Math.sin(time * 0.6) + 1) / 2) * 0.06
  const glow = ctx.createRadialGradient(core.x, core.y, 4, core.x, core.y, radius + 20)
  glow.addColorStop(0, `rgba(245, 158, 11, ${breathe})`)
  glow.addColorStop(1, 'rgba(245, 158, 11, 0)')
  ctx.fillStyle = glow
  ctx.beginPath()
  ctx.arc(core.x, core.y, radius + 20, 0, Math.PI * 2)
  ctx.fill()

  // A handful of thin auxiliary rings purely for depth, plus the bolder main
  // orbit ring that the 4 modules actually travel on.
  drawAuxRing(core, radius * 0.42, 0.35, 0.5)
  drawAuxRing(core, radius * 0.68, 0.55, 0.6)
  drawOrbitRing(core, radius)
  drawAuxRing(core, radius * 1.16, 0.5, 0.6)
  drawAuxRing(core, radius * 1.34, 0.3, 0.5)

  const positions = MODULES.map((m, i) => {
    const angle = -Math.PI / 2 + i * (Math.PI / 2) + rotation
    return { ...m, angle, x: core.x + Math.cos(angle) * radius, y: core.y + Math.sin(angle) * radius }
  })

  positions.forEach((n) => drawSpoke(core, n.x, n.y))
  positions.forEach((n) => drawTrail(core, radius, n.angle, n.color))

  positions.forEach((n, i) => {
    const tOut = (time * 0.4 + i * 0.22) % 1
    drawSpokePulse(core, n.x, n.y, n.color, tOut)
  })

  // Two bright pulses weaving around the ring itself, linking the 4 modules
  // to each other (as opposed to the spokes, which link them to the core).
  drawRingPulse(core, radius, rotation * -2.4, '#fde68a')
  drawRingPulse(core, radius, rotation * -2.4 + Math.PI, '#bae6fd')

  positions.forEach((n) => drawNode(n.x, n.y, n.light, n.shadow, n.title, n.subtitle, 54))
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
