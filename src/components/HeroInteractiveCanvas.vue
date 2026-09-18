<template>
  <div class="relative w-full aspect-square max-w-[480px] mx-auto rounded-3xl bg-white border border-zinc-100 shadow-xl overflow-hidden" ref="containerRef">
    <!-- Overlay texts that don't need to be in canvas for better crispness -->
    <div class="absolute top-0 left-0 w-full p-5 flex items-center justify-between text-xs z-10 pointer-events-none">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-medium border border-amber-200/60 shadow-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
        {{ $t('canvas.cycle') }}
      </span>
      <span class="text-[11px] font-semibold text-zinc-400">
        Real-time Sync
      </span>
    </div>

    <canvas 
      ref="canvasRef" 
      class="absolute inset-0 w-full h-full z-0"
      @click="handleClick"
      @mousemove="handleMouseMove"
      @mouseleave="hoveredNode = null"
    ></canvas>

    <div class="absolute bottom-0 left-0 w-full p-5 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-100/50 bg-white/50 backdrop-blur-sm z-10 pointer-events-none">
      <span class="flex items-center gap-1 text-amber-600 font-medium">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        {{ $t('canvas.closed') }}
      </span>
      <span class="font-bold text-zinc-700"><span v-html="$t('canvas.latency')"></span></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const containerRef = ref(null)
const canvasRef = ref(null)

let ctx = null
let animationFrameId = null
let width = 0
let height = 0
let time = 0

const nodes = [
  { id: 'wms', label: t('canvas.wms'), sub: t('canvas.wmsSub'), route: '/wms', color: '#fbbf24', angleOffset: -Math.PI / 6 },
  { id: 'tms', label: t('canvas.tms'), sub: t('canvas.tmsSub'), route: '/tms', color: '#f59e0b', angleOffset: Math.PI / 2 },
  { id: 'pos', label: t('canvas.pos'), sub: t('canvas.posSub'), route: '/pos', color: '#d97706', angleOffset: Math.PI + Math.PI / 6 }
]

const hoveredNode = ref(null)

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
  const centerY = height / 2
  // Responsive radius based on container size to prevent overlapping
  const orbitRadius = Math.min(width, height) * 0.28 
  
  time += 0.003 // Rotation speed
  
  // Outer Orbit
  ctx.beginPath()
  ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2)
  ctx.strokeStyle = '#fef3c7'
  ctx.lineWidth = 1.5
  ctx.setLineDash([6, 6])
  ctx.stroke()
  ctx.setLineDash([])

  // Secondary Ring
  ctx.beginPath()
  ctx.arc(centerX, centerY, orbitRadius * 0.7, 0, Math.PI * 2)
  ctx.strokeStyle = '#fde68a'
  ctx.lineWidth = 1
  ctx.stroke()
  
  // Data particles along the connections
  nodes.forEach((node) => {
    const angle = time + node.angleOffset
    const nx = centerX + Math.cos(angle) * orbitRadius
    const ny = centerY + Math.sin(angle) * orbitRadius
    
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(nx, ny)
    ctx.strokeStyle = node.color + '30'
    ctx.lineWidth = 1
    ctx.stroke()
    
    // Moving dot
    const dotPos = (time * 3 + node.angleOffset) % 1
    const dotX = centerX + (nx - centerX) * dotPos
    const dotY = centerY + (ny - centerY) * dotPos
    
    ctx.beginPath()
    ctx.arc(dotX, dotY, 2.5, 0, Math.PI*2)
    ctx.fillStyle = node.color
    ctx.fill()
    ctx.shadowColor = node.color
    ctx.shadowBlur = 8
    ctx.fill()
    ctx.shadowBlur = 0
  })

  // Central Hub
  ctx.save()
  const hubSize = 96
  const gradient = ctx.createLinearGradient(centerX - hubSize/2, centerY - hubSize/2, centerX + hubSize/2, centerY + hubSize/2)
  gradient.addColorStop(0, '#18181b')
  gradient.addColorStop(1, '#27272a')
  
  ctx.shadowColor = 'rgba(245, 158, 11, 0.4)'
  ctx.shadowBlur = 25
  ctx.fillStyle = gradient
  
  // Draw rounded rect for hub
  ctx.beginPath()
  ctx.roundRect(centerX - hubSize/2, centerY - hubSize/2, hubSize, hubSize, 20)
  ctx.fill()
  
  ctx.shadowBlur = 0
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 15px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('ecor Hub', centerX, centerY - 2)
  
  ctx.font = '500 10px system-ui, -apple-system, sans-serif'
  ctx.fillStyle = '#fde68a'
  ctx.fillText(t('canvas.sync'), centerX, centerY + 18)
  ctx.restore()
  
  // Orbiting Nodes
  nodes.forEach((node) => {
    const angle = time + node.angleOffset
    const nx = centerX + Math.cos(angle) * orbitRadius
    const ny = centerY + Math.sin(angle) * orbitRadius
    
    node.x = nx
    node.y = ny
    
    const isHovered = hoveredNode.value === node.id
    const boxW = 150
    const boxH = 54
    
    ctx.save()
    if (isHovered) {
      ctx.shadowColor = node.color + '60'
      ctx.shadowBlur = 20
      ctx.translate(nx, ny)
      ctx.scale(1.05, 1.05)
      ctx.translate(-nx, -ny)
    } else {
      ctx.shadowColor = 'rgba(15, 23, 42, 0.08)'
      ctx.shadowBlur = 10
    }
    
    // Card Background
    ctx.fillStyle = '#ffffff'
    ctx.strokeStyle = isHovered ? node.color : '#f1f5f9'
    ctx.lineWidth = isHovered ? 2 : 1
    ctx.beginPath()
    ctx.roundRect(nx - boxW/2, ny - boxH/2, boxW, boxH, 12)
    ctx.fill()
    ctx.stroke()
    ctx.shadowBlur = 0
    
    // Icon background
    ctx.fillStyle = node.color + '15'
    ctx.beginPath()
    ctx.roundRect(nx - boxW/2 + 8, ny - 15, 30, 30, 8)
    ctx.fill()
    
    // Icon dot/symbol (simplified as a colored circle for canvas)
    ctx.fillStyle = node.color
    ctx.beginPath()
    ctx.arc(nx - boxW/2 + 23, ny, 5, 0, Math.PI * 2)
    ctx.fill()
    
    // Text
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    
    ctx.fillStyle = isHovered ? node.color : '#1e293b'
    ctx.font = 'bold 12px system-ui, -apple-system, sans-serif'
    ctx.fillText(node.label, nx - boxW/2 + 46, ny - 8)
    
    ctx.fillStyle = '#64748b'
    ctx.font = '10px system-ui, -apple-system, sans-serif'
    ctx.fillText(node.sub, nx - boxW/2 + 46, ny + 8)
    
    ctx.restore()
  })
  
  animationFrameId = requestAnimationFrame(draw)
}

const handleMouseMove = (e) => {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  
  let found = null
  for (const node of nodes) {
    if (node.x && node.y) {
      const dx = mouseX - node.x
      const dy = mouseY - node.y
      if (Math.abs(dx) < 75 && Math.abs(dy) < 27) {
        found = node.id
        break
      }
    }
  }
  
  if (found !== hoveredNode.value) {
    hoveredNode.value = found
    canvasRef.value.style.cursor = found ? 'pointer' : 'default'
  }
}

const handleClick = () => {
  if (hoveredNode.value) {
    const node = nodes.find(n => n.id === hoveredNode.value)
    if (node && node.route) {
      router.push(node.route)
    }
  }
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  window.addEventListener('resize', resize)
  resize()
  draw()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>
