export default function EventLogSection() {
  const logs = [
    { time: '14:02:01', msg: 'sys.kernel: TCP conn limit reached', color: 'text-[#555555]' },
    { time: '14:02:05', msg: 'auth.daemon: User root logged out', color: 'text-[#a0a0a0]' },
    { time: '14:03:12', msg: 'docker.d: container pruned', color: 'text-[#555555]' },
    { time: '14:03:15', msg: 'vpn.client: handshake ok', color: 'text-[#555555]' },
    { time: '14:05:22', msg: 'sys.monitor: high I/O wait', color: 'text-white font-bold' },
    { time: '14:05:23', msg: 'crond: running daily backup', color: 'text-[#555555]' },
    { time: '14:05:40', msg: 'sshd: Accepted publickey neil', color: 'text-[#555555]' },
    { time: '14:06:01', msg: 'kernel: pciehp 0000:00:1c.0', color: 'text-[#555555]' },
  ]

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white lowercase flex justify-between items-baseline pb-1 border-b border-[#333333] text-[10px]">
        <div className="flex items-baseline gap-1">
          <span className="text-[#555555] text-[9px]">■</span>
          <span>event log</span>
        </div>
      </div>
      <div className="flex flex-col gap-[2px] text-[9px]">
        {logs.map((log, i) => (
          <div key={i} className={`flex gap-2 break-all ${log.color}`}>
            <span className="shrink-0 text-[#555555]">{log.time}</span>
            <span className="grow">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
