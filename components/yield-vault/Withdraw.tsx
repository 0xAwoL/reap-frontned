'use client'

export default function Withdraw() {
  return (
    <div className="flex flex-col h-full grow bg-[#1E232B] w-full overflow-x-hidden">
      <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#3D4753] flex justify-between items-center shrink-0 bg-[#2C333A]">
        <span className="tracking-[1px] font-bold">WITHDRAW_FUNDS</span>
      </div>
      
      <div className="p-[16px] border-b border-[#3D4753] flex flex-col sm:flex-row justify-between bg-[#2C333A] shrink-0 gap-4 sm:gap-0">
        <div className="flex flex-col gap-[4px]">
          <span className="text-[#828D9A] uppercase">AVAILABLE</span>
          <span className="text-white text-[12px]">1,240.50 vUSDC-BAL</span>
        </div>
        <div className="flex flex-col gap-[4px] sm:text-right">
          <span className="text-[#828D9A] uppercase">OUTPUT_EST(USDC)</span>
          <span className="text-white text-[12px]">$1,240.50</span>
        </div>
      </div>

      <div className="p-[16px] shrink-0 flex flex-col gap-[8px]">
        <div className="text-[#828D9A] uppercase flex justify-between w-full">
          <span>BURN_AMOUNT</span>
        </div>
        <div className="flex bg-[#2C333A] border border-[#3D4753] focus-within:border-[#b0b0b0] transition-colors h-[32px]">
          <input 
            type="number" 
            placeholder="0.00" 
            className="bg-transparent border-none text-white p-[8px] w-full outline-none placeholder-[#828D9A] font-mono h-full [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <div className="flex items-center border-l border-[#3D4753] shrink-0 h-full">
             <button className="px-[12px] h-full hover:text-white uppercase text-[#828D9A] cursor-pointer transition-colors active:text-[#E0E0E0]">
               MAX
             </button>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-[#3D4753]">
        <button className="w-full border-none bg-[#2C333A] text-white py-[12px] hover:bg-[#4CAF50] hover:text-[#14181E] uppercase tracking-[2px] font-bold transition-colors cursor-pointer focus:bg-[#4CAF50]">
          EXECUTE_WITHDRAW
        </button>
      </div>
    </div>
  )
}
