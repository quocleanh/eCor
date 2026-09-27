<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <canvas ref="canvasRef" class="w-full h-full block" :style="{ opacity: opacity }"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  colorScheme: {
    type: String,
    default: 'amber' // 'amber', 'sky', 'cyan', 'rose', 'indigo', 'emerald'
  },
  opacity: {
    type: Number,
    default: 0.65
  },
  particleCount: {
    type: Number,
    default: 48
  },
  interactive: {
    type: Boolean,
    default: true
  }
})

const canvasRef = ref(null)
let animationId = null
let resizeObserver = null
let mouseMoveHandler = null
let mouseLeaveHandler = null

const mouse = { x: -9999, y: -9999, active: false }

const paletteMap = {
  amber: ['#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309'],
  sky: ['#0284c7', '#2563eb', '#38bdf8', '#0ea5e9', '#60a5fa'],
  cyan: ['#0891b2', '#06b6d4', '#22d3ee', '#0ea5e9', '#14b8a6'],
  rose: ['#e11d48', '#f43f5e', '#fb7185', '#38bdf8', '#fb923c'],
  indigo: ['#4f46e5', '#6366f1', '#818cf8', '#0ea5e9', '#a855f7'],
  emerald: ['#059669', '#10b981', '#34d399', '#0284c7', '#38bdf8']
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let dpr = window.devicePixelRatio || 1
  let width = 0
  let height = 0
  let particles = []
  let packets = [] // light packets traveling along connections

  const colors = paletteMap[props.colorScheme] || paletteMap.sky
  const connectionDistance = 125

  function resize() {
    const parent = canvas.parentElement
    if (!parent) return
    width = parent.clientWidth
    height = parent.clientHeight
    dpr = window.devicePixelRatio || 1

    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.resetTransform?.()
    ctx.scale(dpr, dpr)
  }

  class Particle {
    constructor() {
      this.reset(true)
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 0 : width)
      this.y = Math.random() * height
      this.vx = (Math.random() - 0.5) * 0.45
      this.vy = (Math.random() - 0.5) * 0.45
      this.radius = Math.random() * 2.2 + 1.2
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.baseAlpha = Math.random() * 0.45 + 0.25
      this.pulseSpeed = Math.random() * 0.02 + 0.01
      this.pulse = Math.random() * Math.PI
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.pulse += this.pulseSpeed

      // Soft boundary bounce
      if (this.x < 0 || this.x > width) this.vx *= -1
      if (this.y < 0 || this.y > height) this.vy *= -1

      // Mouse influence
      if (props.interactive && mouse.active) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          const force = (140 - dist) / 140
          this.x -= (dx / dist) * force * 0.8
          this.y -= (dy / dist) * force * 0.8
        }
      }
    }

    draw() {
      const alpha = this.baseAlpha + Math.sin(this.pulse) * 0.15
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha))
      ctx.fill()

      // Subtle outer halo on larger nodes
      if (this.radius > 2.2) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 2.4, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = alpha * 0.15
        ctx.fill()
      }
      ctx.globalAlpha = 1.0
    }
  }

  // Data packet traveling along connection lines (Logistics theme)
  class Packet {
    constructor(p1, p2) {
      this.p1 = p1
      this.p2 = p2
      this.t = 0
      this.speed = Math.random() * 0.008 + 0.004
      this.color = p1.color
    }

    update() {
      this.t += this.speed
      return this.t <= 1
    }

    draw() {
      const x = this.p1.x + (this.p2.x - this.p1.x) * this.t
      const y = this.p1.y + (this.p2.y - this.p1.y) * this.t
      ctx.beginPath()
      ctx.arc(x, y, 1.8, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = 0.85
      ctx.fill()
      ctx.globalAlpha = 1.0
    }
  }

  function init() {
    resize()
    particles = []
    packets = []
    const count = Math.min(props.particleCount, Math.floor((width * height) / 18000) + 20)
    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }
  }

  let packetSpawnCounter = 0

  function animate() {
    ctx.clearRect(0, 0, width, height)

    // Draw connecting lines
    const activeLines = []
    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < connectionDistance) {
          activeLines.push([particles[i], particles[j]])
          ctx.beginPath()
          ctx.strokeStyle = particles[i].color
          const alpha = (1 - dist / connectionDistance) * 0.22
          ctx.globalAlpha = alpha
          ctx.lineWidth = 0.9
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
          ctx.globalAlpha = 1.0
        }
      }

      // Connect to mouse cursor if near
      if (props.interactive && mouse.active) {
        const dx = mouse.x - particles[i].x
        const dy = mouse.y - particles[i].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = particles[i].color
          ctx.globalAlpha = (1 - dist / 150) * 0.35
          ctx.lineWidth = 1.2
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
          ctx.globalAlpha = 1.0
        }
      }
    }

    // Spawn and update logistics packets
    packetSpawnCounter++
    if (packetSpawnCounter % 28 === 0 && activeLines.length > 0 && packets.length < 8) {
      const line = activeLines[Math.floor(Math.random() * activeLines.length)]
      packets.push(new Packet(line[0], line[1]))
    }

    packets = packets.filter(p => {
      const alive = p.update()
      if (alive) p.draw()
      return alive
    })

    animationId = requestAnimationFrame(animate)
  }

  // Handle parent resize
  const parent = canvas.parentElement
  if (parent) {
    resizeObserver = new ResizeObserver(() => {
      resize()
      init()
    })
    resizeObserver.observe(parent)

    if (props.interactive) {
      mouseMoveHandler = (e) => {
        const rect = parent.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
        mouse.active = true
      }
      mouseLeaveHandler = () => {
        mouse.active = false
      }
      parent.addEventListener('mousemove', mouseMoveHandler, { passive: true })
      parent.addEventListener('mouseleave', mouseLeaveHandler, { passive: true })
    }
  }

  init()
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (resizeObserver) resizeObserver.disconnect()
  const canvas = canvasRef.value
  const parent = canvas?.parentElement
  if (parent && mouseMoveHandler) {
    parent.removeEventListener('mousemove', mouseMoveHandler)
    parent.removeEventListener('mouseleave', mouseLeaveHandler)
  }
})
</script>
