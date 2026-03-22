'use client'
import { useState } from 'react'
import { Strategies } from '@/components/yield-vault/Strategies'

export default function Deposit() {
  const [strategy, setStrategy] = useState('BALANCED')

  return (
    <div className="flex flex-col h-full bg-[#1E232B] w-full grow overflow-x-hidden">
      <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#3D4753] flex justify-between items-center shrink-0 bg-[#2C333A]">
        <span className="tracking-[1px] font-bold">DEPOSIT_USDC</span>
      </div>

      <div className="border-b border-[#3D4753] shrink-0 w-full flex flex-col items-start bg-[#1E232B]">
        <div className="text-[#828D9A] uppercase flex justify-between px-[16px] py-[8px] text-[10px] tracking-[1px] w-full border-b border-[#3D4753] bg-[#2C333A]">
          <span>1. SELECT_STRATEGY</span>
          <span className="text-white/30">{strategy}_MODE</span>
        </div>
        <Strategies interactive activeStrategy={strategy} onSelect={setStrategy} />
      </div>

      <div className="p-[16px] border-b border-[#3D4753] bg-[#1E232B] shrink-0 flex flex-col gap-[8px]">
        <div className="text-[#828D9A] uppercase flex justify-between w-full">
          <span>2. INPUT_AMOUNT</span>
          <span>BAL: 0.00 USDC</span>
        </div>
        <div className="flex bg-[#2C333A] border border-[#3D4753] focus-within:border-[#b0b0b0] transition-colors h-[32px]">
          <input
            type="number"
            placeholder="0.00"
            className="bg-transparent border-none text-white p-[8px] w-full outline-none placeholder-[#828D9A] font-mono h-full [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <div className="flex items-center px-[12px] h-full text-[#828D9A] border-l border-[#3D4753] shrink-0">
            USDC
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-[#3D4753]">
        <button className="w-full border-none bg-[#4CAF50] text-[#14181E] py-[12px] hover:bg-[#388E3C] transition-colors uppercase tracking-[2px] font-bold cursor-pointer focus:bg-[#388E3C]">
          EXECUTE_DEPOSIT
        </button>
      </div>
    </div>
  )
}
