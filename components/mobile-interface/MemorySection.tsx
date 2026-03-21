export default function MemorySection() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white lowercase flex justify-between items-baseline pb-1 border-b border-[#333333] text-[10px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#555555] text-[9px]">■</span>
          <span>memory</span>
        </div>
        <div className="text-[9px] text-white">64.0 GiB</div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="w-[5ch] text-[#a0a0a0]">Used</span>
        <div className="relative grow overflow-hidden text-[10px] tracking-[-0.5px] leading-none flex items-center h-full">
          <span className="text-[#333333] whitespace-nowrap select-none">||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          <span className="text-white absolute left-0 top-0 bottom-0 whitespace-nowrap overflow-hidden select-none" style={{ width: '88%' }}>||||||||||||||||||||||||||||||||||||||||||||||||||</span>
        </div>
        <span className="text-white text-right w-[4ch]">56.5</span>
        <span className="text-[#555555] w-[3ch] text-left">GiB</span>
      </div>
      
      <div className="flex items-center gap-2 text-[#555555]">
        <span className="w-[5ch] text-[#a0a0a0]">Avail</span>
        <div className="relative grow overflow-hidden text-[10px] tracking-[-0.5px] leading-none flex items-center h-full">
          <span className="text-[#333333] whitespace-nowrap select-none">||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          <span className="text-[#555555] absolute left-0 top-0 bottom-0 whitespace-nowrap overflow-hidden select-none" style={{ width: '12%' }}>||||||||||||||||||||||||||||||||||||||||||||||||||</span>
        </div>
        <span className="text-white text-right w-[4ch]">7.49</span>
        <span className="text-[#555555] w-[3ch] text-left">GiB</span>
      </div>

      <div className="flex items-center gap-2 text-[#555555]">
        <span className="w-[5ch] text-[#a0a0a0]">Cache</span>
        <div className="relative grow overflow-hidden text-[10px] tracking-[-0.5px] leading-none flex items-center h-full">
          <span className="text-[#333333] whitespace-nowrap select-none">||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          <span className="text-[#555555] absolute left-0 top-0 bottom-0 whitespace-nowrap overflow-hidden select-none" style={{ width: '30%' }}>||||||||||||||||||||||||||||||||||||||||||||||||||</span>
        </div>
        <span className="text-white text-right w-[4ch]">19.2</span>
        <span className="text-[#555555] w-[3ch] text-left">GiB</span>
      </div>
    </div>
  )
}
