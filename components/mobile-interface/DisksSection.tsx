export default function DisksSection() {
  const disks = [
    { target: 'root', util: '40%', size: '1.8T', top: '754G', dimTarget: false },
    { target: 'VM', util: '15%', size: '1.8T', top: '754G', dimTarget: false },
    { target: 'Preboot', util: '10%', size: '1.8T', top: '754G', dimTarget: false },
    { target: 'xarts', util: '5%', size: '500M', top: '20M', dimTarget: true },
  ]

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white lowercase flex justify-between items-baseline pb-1 border-b border-[#333333] text-[10px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#555555] text-[9px]">■</span>
          <span>disks</span>
        </div>
        <div className="text-[9px] text-white">i/o</div>
      </div>
      
      <div className="flex flex-col gap-1">
        {disks.map((d) => (
          <div key={d.target}>
            <div className="flex items-center justify-between gap-2">
              <span className={`w-[8ch] whitespace-nowrap overflow-hidden text-ellipsis ${d.dimTarget ? 'text-[#555555]' : 'text-white'}`}>{d.target}</span>
              <div className="relative grow overflow-hidden text-[10px] tracking-[-0.5px] leading-none flex items-center h-full text-[#555555]">
                <span className="text-[#333333] whitespace-nowrap select-none">........................................</span>
                <span className={`absolute left-0 top-0 bottom-0 whitespace-nowrap overflow-hidden select-none ${d.dimTarget ? 'text-[#555555]' : 'text-white'}`} style={{ width: d.util }}>||||||||||||||||||||||||||||||||||||||||</span>
              </div>
              <span className={`text-right min-w-[6ch] ${d.dimTarget ? 'text-[#555555]' : 'text-white'}`}>{d.size}</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-[#555555] -mt-1">
              <span className="w-[8ch] whitespace-nowrap overflow-hidden text-ellipsis"></span>
              <span className="text-[9px] flex-1">U</span>
              <span className="text-right min-w-[6ch]">{d.top}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
