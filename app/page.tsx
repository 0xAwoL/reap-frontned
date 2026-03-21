import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve added the specific views according to your designs.</p>
          
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline">
              <Link href="/mobile-interface">Mobile Engineering Interface</Link>
            </Button>
            <Button asChild>
              <Link href="/cortex-sync">Cortex // Sync Widget</Link>
            </Button>
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground mt-4">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
