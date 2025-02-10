import { cn } from "@/lib/utils"

function Tag({className, children} : {className?: string, children: React.ReactNode}) {
  return (
    <div className={cn("px-6 py-6 text-center flex text-primary-800 items-center justify-center gap-3 text-5xl font-semibold w-fit", className)}>
        {children}
    </div>
  )
}

export default Tag