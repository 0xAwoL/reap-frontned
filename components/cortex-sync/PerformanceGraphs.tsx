'use client'

import { useEffect, useRef } from 'react'

export default function PerformanceGraphs() {
  const lossCanvasRef = useRef<HTMLCanvasElement>(null)
  const accCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const initGraph = (canvas: HTMLCanvasElement, color: string, speed: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      let data = new Array(50).fill(0.5)
      let time = 0
      let animationFrameId: number

      const resize = () => {
        if (canvas.parentElement) {
          canvas.width = canvas.parentElement.offsetWidth
          canvas.height = canvas.parentElement.offsetHeight
        }
      }
      window.addEventListener('resize', resize)
      resize()

      const draw = () => {
        time += speed
        const noise = (Math.random() - 0.5) * 0.1
        const trend = Math.sin(time) * 0.3 + 0.5
        const newVal = Math.max(0.1, Math.min(0.9, trend + noise))

        data.push(newVal)
        data.shift()

        ctx.fillStyle = '#050505'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = '#1a1a1a'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)
        ctx.lineTo(canvas.width, canvas.height / 2)
        ctx.stroke()

        ctx.strokeStyle = color
        ctx.lineWidth = 1.5
        ctx.beginPath()
        const step = canvas.width / (data.length - 1)

        for (let i = 0; i < data.length; i++) {
          const x = i * step
          const y = canvas.height - data[i] * canvas.height
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()

        const lastX = canvas.width
        const lastY = canvas.height - data[data.length - 1] * canvas.height
        ctx.beginPath()
        ctx.arc(lastX - 2, lastY, 2, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        animationFrameId = requestAnimationFrame(draw)
      }
      draw()

      return () => {
        window.removeEventListener('resize', resize)
        cancelAnimationFrame(animationFrameId)
      }
    }

    const cleanupLoss = lossCanvasRef.current ? initGraph(lossCanvasRef.current, '#ffffff', 0.05) : undefined
    const cleanupAcc = accCanvasRef.current ? initGraph(accCanvasRef.current, '#ffffff', 0.02) : undefined

    return () => {
      cleanupLoss?.()
      cleanupAcc?.()
    }
  }, [])

  return (
    <div className="grow p-[16px] grid grid-cols-2 gap-[16px]">
      <div className="border border-[#1a1a1a] relative h-[100px] bg-[#050505]">
        <span className="absolute top-[6px] left-[8px] text-[#444] uppercase text-[10px]">LOSS_FUNC</span>
        <canvas ref={lossCanvasRef} className="w-full h-full block"></canvas>
      </div>
      <div className="border border-[#1a1a1a] relative h-[100px] bg-[#050505]">
        <span className="absolute top-[6px] left-[8px] text-[#444] uppercase text-[10px]">ACCURACY</span>
        <canvas ref={accCanvasRef} className="w-full h-full block"></canvas>
      </div>
    </div>
  )
}
