export default function CortexHeader() {
  return (
    <div className="flex border-b border-[#1a1a1a] h-[30px] items-center px-[16px] justify-between uppercase tracking-[1px]">
      <div className="flex gap-[24px]">
        <div className="flex items-center">
          <span className="text-[#444] mr-[8px]">SYS</span> 
          <b className="text-white font-[400]">NEURAL_ENG</b>
        </div>
        <div className="flex items-center">
          <span className="text-[#444] mr-[8px] animate-pulse">►</span> 
          <b className="text-white font-[400]">RUNNING</b>
        </div>
      </div>
      <div className="flex gap-[24px]">
        <div className="flex items-center">
          <span className="text-[#444] mr-[8px]">CPU</span> 
          <b className="text-white font-[400]">12%</b>
        </div>
        <div className="flex items-center">
          <span className="text-[#444] mr-[8px]">MEM</span> 
          <b className="text-white font-[400]">4.2GB</b>
        </div>
      </div>
    </div>
  )
}
