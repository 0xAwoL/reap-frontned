import Image from "next/image"

export default function VaultHeader() {
  return (
    <div className="flex h-[36px] items-center justify-between border-b border-[#3D4753] px-[16px] tracking-[1px] uppercase">
      <div className="flex gap-[24px]">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={20}
            height={20}
            className="mr-[8px]"
          />
          <span className="mr-[8px] text-[#828D9A]">SYS</span>
          <b className="font-[400] text-[#4CAF50]">YIELD_VAULT</b>
        </div>
        <div className="hidden items-center sm:flex">
          <span className="mr-[8px] animate-pulse text-[#828D9A]">►</span>
          <b className="font-[400] text-white">ACTIVE_SESSION</b>
        </div>
      </div>
      <div className="flex items-center">
        <appkit-button size="sm" />
      </div>
    </div>
  )
}
