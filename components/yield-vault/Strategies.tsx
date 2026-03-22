'use client'
import Link from 'next/link'

interface StrategiesProps {
  interactive?: boolean
  activeStrategy?: string
  onSelect?: (s: string) => void
}

export function Strategies({ interactive = false, activeStrategy = 'BALANCED', onSelect }: StrategiesProps) {
  const handleSelect = (s: string) => {
    if (interactive && onSelect) {
      onSelect(s)
    }
  }

  const isStable = activeStrategy === 'STABLE'
  const isBalanced = activeStrategy === 'BALANCED'
  const isGrowth = activeStrategy === 'GROWTH'

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grow w-full bg-[#1E232B]">
      {/* STABLE */}
      <div 
        onClick={() => handleSelect('STABLE')}
        className={`p-[16px] border-b md:border-b-0 md:border-r border-[#3D4753] flex flex-col gap-[8px] transition-colors ${
          interactive ? 'cursor-pointer hover:bg-[#2C333A]' : ''
        } ${interactive && isStable ? 'bg-[#14181E] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''}`}
      >
        <div className="flex justify-between items-center text-[#828D9A] uppercase mb-1">
          <span className="flex items-center gap-2">
            {interactive && <div className={`w-[6px] h-[6px] rounded-full transition-all ${isStable ? 'bg-white shadow-[0_0_8px_white]' : 'bg-[#828D9A]'}`}></div>}
            <span className={interactive && isStable ? 'text-white font-bold' : ''}>STABLE</span>
          </span>
          <span className={interactive && isStable ? 'text-white font-bold' : 'text-white'}>~4.5%</span>
        </div>
        <div className={`text-[10px] leading-[1.4] ${interactive && isStable ? 'text-[#E0E0E0]' : 'text-[#828D9A]'}`}>
          80% USDY<br/>20% USDC LEND
        </div>
        {!interactive && (
          <div className="mt-auto pt-4">
            <Link href="/app"><button className="w-full border border-[#3D4753] text-white py-[4px] hover:bg-[#14181E] uppercase tracking-[1px] cursor-pointer">INITIATE</button></Link>
          </div>
        )}
      </div>
      
      {/* BALANCED */}
      <div 
        onClick={() => handleSelect('BALANCED')}
        className={`p-[16px] border-b md:border-b-0 md:border-r border-[#3D4753] flex flex-col gap-[8px] relative transition-colors ${
          interactive ? 'cursor-pointer hover:bg-[#2C333A]' : ''
        } ${interactive && isBalanced ? 'bg-[#14181E] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''}`}
      >
        {!interactive && <div className="absolute top-0 right-0 bg-[#3D4753] text-white text-[9px] px-1">MVP</div>}
        <div className="flex justify-between items-center text-[#828D9A] uppercase mb-1">
          <span className="flex items-center gap-2">
            {interactive && <div className={`w-[6px] h-[6px] rounded-full transition-all ${isBalanced ? 'bg-white shadow-[0_0_8px_white]' : 'bg-[#828D9A]'}`}></div>}
            <span className={interactive && isBalanced ? 'text-white font-bold' : 'text-white font-bold'}>BALANCED</span>
          </span>
          <span className="text-white font-bold">~8.0%</span>
        </div>
        <div className={`text-[10px] leading-[1.4] ${interactive && isBalanced ? 'text-white' : 'text-white'}`}>
          50% USDY<br/>30% XAUT LP<br/>20% xSPY LEND
        </div>
        {!interactive && (
          <div className="mt-auto pt-4">
            <Link href="/app"><button className="w-full border border-[#828D9A] bg-[#3D4753] text-white py-[4px] hover:bg-[#1E232B] uppercase tracking-[1px] cursor-pointer">INITIATE</button></Link>
          </div>
        )}
      </div>

      {/* GROWTH */}
      <div 
        onClick={() => handleSelect('GROWTH')}
        className={`p-[16px] border-b md:border-b-0 border-[#3D4753] flex flex-col gap-[8px] transition-colors ${
          interactive ? 'cursor-pointer hover:bg-[#2C333A]' : ''
        } ${interactive && isGrowth ? 'bg-[#14181E] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]' : ''}`}
      >
        <div className="flex justify-between items-center text-[#828D9A] uppercase mb-1">
          <span className="flex items-center gap-2">
            {interactive && <div className={`w-[6px] h-[6px] rounded-full transition-all ${isGrowth ? 'bg-white shadow-[0_0_8px_white]' : 'bg-[#828D9A]'}`}></div>}
            <span className={interactive && isGrowth ? 'text-white font-bold' : ''}>GROWTH</span>
          </span>
          <span className={interactive && isGrowth ? 'text-white font-bold' : 'text-white'}>~12.0%</span>
        </div>
        <div className={`text-[10px] leading-[1.4] ${interactive && isGrowth ? 'text-[#E0E0E0]' : 'text-[#828D9A]'}`}>
          60% XAUT LP<br/>40% xSPY LEND
        </div>
        {!interactive && (
          <div className="mt-auto pt-4">
            <Link href="/app"><button className="w-full border border-[#3D4753] text-white py-[4px] hover:bg-[#14181E] uppercase tracking-[1px] cursor-pointer">INITIATE</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}
