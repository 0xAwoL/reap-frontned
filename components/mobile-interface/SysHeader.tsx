export default function SysHeader() {
  return (
    <div className="flex flex-col gap-1 pb-2 border-b border-dashed border-[#333333] mb-3 shrink-0">
      <div className="flex justify-between text-[10px]">
        <div className="flex gap-[6px] text-[#555555]">
          <span>host</span><span className="text-white">node-prod-zeus</span>
        </div>
        <div className="flex gap-[6px] text-[#555555]">
          <span>env</span><span className="text-white">production</span>
        </div>
      </div>
      <div className="flex justify-between text-[10px]">
        <div className="flex gap-[6px] text-[#555555]">
          <span>up</span><span className="text-white">42d 16:32</span>
        </div>
        <div className="flex gap-[6px] text-[#555555]">
          <span>bat</span><span className="text-white">100%</span>
        </div>
      </div>
      <div className="flex justify-between text-[10px]">
        <div className="flex gap-[6px] text-[#555555]">
          <span>load</span><span className="text-white">2.14 2.10 2.05</span>
        </div>
        <div className="flex gap-[6px] text-[#555555]">
          <span>tasks</span><span className="text-white">1842</span>
        </div>
      </div>
    </div>
  )
}
