<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none opacity-40"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let resizeHandler = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width, height
  let particles = []
  const particleCount = 45
  const connectionDistance = 110
  const colors = ['#2563eb', '#06b6d4', '#4f46e5', '#38bdf8']

  function resize() {
    if (!canvas.parentElement) return
    width = canvas.width = canvas.parentElement.offsetWidth
    height = canvas.height = canvas.parentElement.offsetHeight
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.vx = (Math.random() - 0.5) * 0.7
      this.vy = (Math.random() - 0.5) * 0.7
      this.radius = Math.random() * 2 + 1
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.baseAlpha = Math.random() * 0.35 + 0.15
    }
    update() {
      this.x += this.vx
      this.y += this.vy
      if (this.x < 0 || this.x > width) this.vx *= -1
      if (this.y < 0 || this.y > height) this.vy *= -1
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = this.baseAlpha
      ctx.fill()
      ctx.globalAlpha = 1.0
    }
  }

  function init() {
    resize()
    particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < connectionDistance) {
          ctx.beginPath()
          ctx.strokeStyle = particles[i].color
          ctx.globalAlpha = (1 - dist / connectionDistance) * 0.18
          ctx.lineWidth = 0.8
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
          ctx.globalAlpha = 1.0
        }
      }
    }
    animationId = requestAnimationFrame(animate)
  }

  resizeHandler = () => {
    resize()
    init()
  }

  window.addEventListener('resize', resizeHandler)
  init()
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
})
</script>
