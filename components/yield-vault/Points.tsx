export const Points = () => {
    return (
        <>
            <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#1a1a1a] flex justify-between items-center">
                <span>POINTS_STATUS</span>
                <span className="text-[#444]">SEASON_1</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1a1a1a]">
                <div className="p-[12px_16px] border-b md:border-b-0 md:border-r border-[#1a1a1a] flex flex-col gap-[8px]">
                    <div className="text-[#444] uppercase">TOTAL_POINTS</div>
                    <div className="text-white text-[14px]">12,450 XP</div>
                </div>
                <div className="p-[12px_16px] flex flex-col gap-[8px]">
                    <div className="text-[#444] uppercase">CURRENT_RANK</div>
                    <div className="text-white text-[14px]">#4,201</div>
                </div>
            </div>

            <div className="py-[8px] px-[16px] text-white uppercase border-b border-[#1a1a1a] flex justify-between items-center mt-[32px] border-t">
                <span>POINTS_HISTORY</span>
                <span className="text-[#444]">LATEST</span>
            </div>
            
            <div className="grid grid-cols-[1fr_80px] border-b border-[#1a1a1a] h-[24px] items-center text-left text-[#444] uppercase text-[9px] shrink-0">
                <div className="pl-[16px]">ACTION</div>
                <div className="border-l border-[#1a1a1a] pl-[12px] h-full leading-[24px]">EARNED</div>
            </div>
            
            <div className="flex flex-col grow">
                <div className="grid grid-cols-[1fr_80px] h-[24px] items-center border-b border-[#1a1a1a]">
                    <div className="pl-[16px] text-white overflow-hidden text-ellipsis whitespace-nowrap pr-2">Deposit USDC Vault</div>
                    <div className="border-l border-[#1a1a1a] h-full leading-[24px] pl-[12px] text-[#b0b0b0]">+500 XP</div>
                </div>
                <div className="grid grid-cols-[1fr_80px] h-[24px] items-center border-b border-[#1a1a1a]">
                    <div className="pl-[16px] text-white overflow-hidden text-ellipsis whitespace-nowrap pr-2">Daily Login</div>
                    <div className="border-l border-[#1a1a1a] h-full leading-[24px] pl-[12px] text-[#b0b0b0]">+50 XP</div>
                </div>
                <div className="grid grid-cols-[1fr_80px] h-[24px] items-center border-b border-[#1a1a1a]">
                    <div className="pl-[16px] text-white overflow-hidden text-ellipsis whitespace-nowrap pr-2">Referred User</div>
                    <div className="border-l border-[#1a1a1a] h-full leading-[24px] pl-[12px] text-[#b0b0b0]">+1000 XP</div>
                </div>
            </div>
        </>
    )
}