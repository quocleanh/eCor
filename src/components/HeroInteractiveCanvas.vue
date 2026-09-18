<template>
  <div class="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-white border border-zinc-100 shadow-xl overflow-hidden" ref="containerRef">
    <!-- Overlay texts -->
    <div class="absolute top-0 left-0 w-full p-5 flex items-center justify-between text-xs z-10 pointer-events-none">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-200/60 shadow-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
        Seamless Integration
      </span>
      <span class="text-[11px] font-semibold text-zinc-400">
        WMS - TMS - POS
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

const resize = () => {
  if (!containerRef.value || !canvasRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  width = rect.width
  height = rect.height
  const dpr = window.devicePixelRatio || 1
  canvasRef.value.width = width * dpr
  canvasRef.value.height = height * dpr
  ctx.scale(dpr, dpr)
}

const draw = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, width, height)
  
  const centerX = width / 2
  
  const wmsX = width * 0.28
  const wmsY = height * 0.65
  
  const tmsX = width * 0.72
  const tmsY = height * 0.65
  
  const posX = width * 0.5
  const posY = height * 0.28
  
  time += 0.005
  
  // Draw connection lines
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
  
  drawConnection(wmsX, wmsY, tmsX, tmsY) // WMS-TMS
  drawConnection(wmsX, wmsY, posX, posY) // WMS-POS
  drawConnection(tmsX, tmsY, posX, posY) // TMS-POS
  
  // Draw glowing data particles flowing both ways
  const drawParticles = (x1, y1, x2, y2, color, offsetTime) => {
    for (let i = 0; i < 2; i++) {
      const t = (time + offsetTime + i * 0.5) % 1
      const px = x1 + (x2 - x1) * t
      const py = y1 + (y2 - y1) * t
      
      const angle = Math.atan2(y2 - y1, x2 - x1)
      const perpAngle = angle + Math.PI / 2
      const ox = Math.cos(perpAngle) * 4
      const oy = Math.sin(perpAngle) * 4
      
      ctx.beginPath()
      ctx.arc(px + ox, py + oy, 2, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 8
      ctx.fill()
      ctx.shadowBlur = 0
    }
  }

  // WMS (Amber) to TMS
  drawParticles(wmsX, wmsY, tmsX, tmsY, '#f59e0b', 0)
  // TMS (Sky) to WMS
  drawParticles(tmsX, tmsY, wmsX, wmsY, '#0ea5e9', 0.1)
  
  // WMS (Amber) to POS
  drawParticles(wmsX, wmsY, posX, posY, '#f59e0b', 0.2)
  // POS (Emerald) to WMS
  drawParticles(posX, posY, wmsX, wmsY, '#10b981', 0.3)
  
  // TMS (Sky) to POS
  drawParticles(tmsX, tmsY, posX, posY, '#0ea5e9', 0.4)
  // POS (Emerald) to TMS
  drawParticles(posX, posY, tmsX, tmsY, '#10b981', 0.5)
  
  // Orbiting subnodes
  const drawSubnode = (cx, cy, angleOffset, color, label) => {
    const radius = 65
    const angle = time * 0.5 + angleOffset
    const nx = cx + Math.cos(angle) * radius
    const ny = cy + Math.sin(angle) * radius
    
    // Line to parent
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(nx, ny)
    ctx.strokeStyle = color + '40'
    ctx.lineWidth = 1
    ctx.stroke()
    
    // Subnode bg
    ctx.beginPath()
    ctx.roundRect(nx - 35, ny - 10, 70, 20, 10)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = color + '60'
    ctx.lineWidth = 1
    ctx.stroke()
    
    // Subnode text
    ctx.fillStyle = '#334155'
    ctx.font = '500 9px system-ui'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(label, nx, ny)
  }
  
  // WMS Subnodes
  drawSubnode(wmsX, wmsY, Math.PI, '#f59e0b', 'Inventory')
  drawSubnode(wmsX, wmsY, Math.PI * 0.5, '#f59e0b', 'Pick & Pack')
  
  // TMS Subnodes
  drawSubnode(tmsX, tmsY, 0, '#0ea5e9', 'AI Routing')
  drawSubnode(tmsX, tmsY, Math.PI * 0.5, '#0ea5e9', 'e-POD')

  // POS Subnodes
  drawSubnode(posX, posY, Math.PI * 1.25, '#10b981', 'Checkout')
  drawSubnode(posX, posY, Math.PI * 1.75, '#10b981', 'Offline Sync')

  // Function to draw main node
  const drawMainNode = (x, y, colorCode, shadowColor, title, subtitle) => {
    ctx.save()
    const size = 64
    ctx.shadowColor = shadowColor
    ctx.shadowBlur = 20
    ctx.fillStyle = '#18181b'
    ctx.beginPath()
    ctx.roundRect(x - size/2, y - size/2, size, size, 16)
    ctx.fill()
    
    ctx.shadowBlur = 0
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 16px system-ui'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(title, x, y - 6)
    ctx.fillStyle = colorCode
    ctx.font = '500 9px system-ui'
    ctx.fillText(subtitle, x, y + 10)
    ctx.restore()
  }

  drawMainNode(wmsX, wmsY, '#fcd34d', 'rgba(245, 158, 11, 0.4)', 'WMS', 'Warehouse')
  drawMainNode(tmsX, tmsY, '#7dd3fc', 'rgba(14, 165, 233, 0.4)', 'TMS', 'Transport')
  drawMainNode(posX, posY, '#6ee7b7', 'rgba(16, 185, 129, 0.4)', 'POS', 'Retail')

  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    resize()
    window.addEventListener('resize', resize)
    draw()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>
