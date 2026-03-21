export default function CpuSection() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white lowercase flex justify-between items-baseline pb-1 border-b border-[#333333] text-[10px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#555555] text-[9px]">■</span>
          <span>cpu</span>
        </div>
        <div className="text-[9px] text-white">18.4%</div>
      </div>
      
      <div className="w-full overflow-hidden mb-2">
        <div className="inline-flex items-end h-[24px] text-[9px] leading-none tracking-normal whitespace-nowrap">
          <span className="text-[#555555]">▃▄▂ ▂▃▄▅▆▇█▆▅▄▃▂ ▂▃▄▅▆▇█▇▆▅▄▃▂ </span>
          <span className="text-white">▇█▇▆▅▄▃▂ ▂▃▄▅▆▇█▆▅▄▃▂ </span>
          <span className="text-[#555555]">▂▃▄▅▆▇█▇▆▅▄▃▂ ▂▃▄▅▆▇█</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-1 gap-x-3">
        {[
          { id: 'c0', val: 30 },
          { id: 'c6', val: 0 },
          { id: 'c1', val: 45 },
          { id: 'c7', val: 12 },
          { id: 'c2', val: 88 },
          { id: 'c8', val: 4 },
          { id: 'c3', val: 25 },
          { id: 'c9', val: 0 },
        ].map((core) => (
          <div key={core.id} className="flex items-center gap-1">
            <span className="w-[2ch] text-[#555555] text-[9px]">{core.id}</span>
            <div className="relative grow overflow-hidden text-[10px] tracking-[-0.5px] leading-none flex items-center h-full">
              <span className="text-[#333333] whitespace-nowrap select-none">||||||||||||||||||||||||||||||</span>
              <span className="text-white absolute left-0 top-0 bottom-0 whitespace-nowrap overflow-hidden select-none" style={{ width: `${core.val}%` }}>||||||||||||||||||||||||||||||</span>
            </div>
            <span className="w-[3ch] text-right text-white text-[9px]">{core.val}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
