'use client'

import { useState, useEffect } from 'react'

export default function MatrixPanel() {
  const rowCount = 14
  const [currentRow, setCurrentRow] = useState(0)
  const [matrixData, setMatrixData] = useState(() => Array(rowCount).fill('-- -- -- --'))

  useEffect(() => {
    const generateHex = () => '0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0')

    const interval = setInterval(() => {
      setCurrentRow((prev) => {
        const next = (prev + 1) % rowCount
        return next
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Generate new data when currentRow changes
    setMatrixData((prev) => {
      const generateHex = () => '0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0')
      const newData = [...prev]
      const val1 = generateHex().substring(0, 4)
      const val2 = generateHex().substring(0, 4)
      newData[currentRow] = `${val1} ${val2} [ACT]`
      return newData
    })
  }, [currentRow])

  return (
    <div className="border-r border-[#1a1a1a] flex flex-col">
      <div className="grid grid-cols-[40px_1fr_40px] border-b border-[#1a1a1a] h-[24px] items-center text-center text-[#444]">
        <div>IDX</div>
        <div className="text-left pl-[12px]">WEIGHT_HASH</div>
        <div>ST</div>
      </div>
      <div className="flex flex-col grow relative">
        {matrixData.map((data, i) => (
          <div key={i} className="grid grid-cols-[40px_1fr_40px] h-[24px] items-center border-b border-[#1a1a1a] last:border-b-0 relative">
            <div className="text-[#444] text-center border-r border-[#1a1a1a] h-full leading-[24px]">
              {i.toString(16).toUpperCase().padStart(2, '0')}
            </div>
            <div 
              className="pl-[12px] font-mono tracking-[1px]"
              style={{ color: i === currentRow ? '#fff' : '#b0b0b0' }}
            >
              {data}
            </div>
            <div className="text-[#444] text-center border-l border-[#1a1a1a] h-full leading-[24px]">:</div>
          </div>
        ))}
        <div 
          className="absolute left-0 w-full h-[24px] bg-[rgba(255,255,255,0.03)] border-y border-[rgba(255,255,255,0.1)] pointer-events-none transition-[top] duration-100 ease-[steps(1)]"
          style={{ top: `${currentRow * 24}px` }}
        ></div>
      </div>
    </div>
  )
}
