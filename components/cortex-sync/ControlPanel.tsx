'use client'

import { useState, useRef, useEffect } from 'react'
import PerformanceGraphs from './PerformanceGraphs'

function Slider({ label, min, max, initial, precision }: { label: string, min: number, max: number, initial: number, precision: number }) {
  const [val, setVal] = useState(initial)
  const [pct, setPct] = useState(() => ((initial - min) / (max - min)) * 100)
  const trackRef = useRef<HTMLDivElement>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = trackRef.current
    if (!container) return

    const updateValue = (clientX: number) => {
      const rect = container.getBoundingClientRect()
      let x = clientX - rect.left
      x = Math.max(0, Math.min(x, rect.width))
      const newPct = x / rect.width
      setPct(newPct * 100)
      const newVal = min + (newPct * (max - min))
      setVal(newVal)
    }

    updateValue(e.clientX)

    const onPointerMove = (moveEvent: PointerEvent) => {
      updateValue(moveEvent.clientX)
    }

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  return (
    <div className="p-[12px_16px] border-b border-r border-[#1a1a1a] flex flex-col gap-[8px] even:border-r-0">
      <div className="flex justify-between text-[#444] uppercase">
        <span>{label}</span>
        <span className="text-white">{val.toFixed(precision)}</span>
      </div>
      <div 
        className="relative h-[16px] flex items-center cursor-pointer" 
        onPointerDown={handlePointerDown}
        ref={trackRef}
      >
        <div className="w-full h-[1px] bg-[#444] relative"></div>
        <div 
          className="w-[10px] h-[10px] border border-white rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black flex justify-center items-center before:content-[''] before:w-[2px] before:h-[2px] before:bg-white before:rounded-full"
          style={{ left: `${pct}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function ControlPanel() {
  const [activeWave, setActiveWave] = useState(0)

  return (
    <div className="flex flex-col">
      <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#1a1a1a] flex justify-between items-center">
        <span>Hyperparameters</span>
        <div className="flex gap-[12px] items-center">
          {[
            <path key="1" d="M0 12 C5 12, 5 0, 10 0 S 15 12, 20 12" />,
            <polyline key="2" points="0,12 5,12 5,0 15,0 15,12 20,12" />,
            <polyline key="3" points="0,12 10,0 20,12" />,
          ].map((child, i) => (
            <div 
              key={i} 
              className={`w-[20px] h-[12px] cursor-pointer transition-opacity duration-200 ${activeWave === i ? 'opacity-100' : 'opacity-30'}`}
              onClick={() => setActiveWave(i)}
            >
              <svg viewBox="0 0 20 12" className="w-full h-full stroke-white stroke-[1.5px] fill-transparent">
                {child}
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2">
        <Slider label="L_RATE" min={0.001} max={0.1} initial={0.045} precision={3} />
        <Slider label="DECAY" min={0.1} max={1.0} initial={0.92} precision={2} />
        <Slider label="MOMTM" min={0} max={255} initial={128} precision={0} />
        <Slider label="BATCH" min={16} max={128} initial={64} precision={0} />
      </div>

      <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#1a1a1a] flex justify-between items-center">
        <span>Performance Metrics</span>
        <span>FLT.32</span>
      </div>

      <PerformanceGraphs />
    </div>
  )
}
