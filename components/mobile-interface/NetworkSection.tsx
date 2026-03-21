export default function NetworkSection() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white lowercase flex justify-between items-baseline pb-1 border-b border-[#333333] text-[10px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#555555] text-[9px]">■</span>
          <span>network</span>
        </div>
        <div className="text-[9px] text-white">en0</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <span className="w-[8ch] text-white whitespace-nowrap overflow-hidden text-ellipsis">dl</span>
          <span className="text-[#555555] text-[9px] flex-1">▼ 41.3 Kib/s</span>
          <span className="text-right min-w-[6ch] text-white">3.98 GiB</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-[#555555] -mt-1">
          <span className="w-[8ch] whitespace-nowrap overflow-hidden text-ellipsis"></span>
          <span className="text-[9px] flex-1">top: 119 Mibp</span>
          <span className="text-right min-w-[6ch]"></span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="w-[8ch] text-white whitespace-nowrap overflow-hidden text-ellipsis">up</span>
          <span className="text-[#555555] text-[9px] flex-1">▲ 49.5 Kib/s</span>
          <span className="text-right min-w-[6ch] text-white">1.96 GiB</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-[#555555] -mt-1">
          <span className="w-[8ch] whitespace-nowrap overflow-hidden text-ellipsis"></span>
          <span className="text-[9px] flex-1">top: 175 Mibp</span>
          <span className="text-right min-w-[6ch]"></span>
        </div>
      </div>
    </div>
  )
}
