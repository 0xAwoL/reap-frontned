import CortexHeader from './CortexHeader'
import MatrixPanel from './MatrixPanel'
import ControlPanel from './ControlPanel'
import CortexFooter from './CortexFooter'

export default function CortexWidget() {
  return (
    <div className="bg-[#030303] border border-[#1a1a1a] w-full max-w-[720px] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      <CortexHeader />
      <div className="grid grid-cols-[280px_1fr] min-h-[380px]">
        <MatrixPanel />
        <ControlPanel />
      </div>
      <CortexFooter />
    </div>
  )
}
