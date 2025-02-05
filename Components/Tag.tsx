'use client'
import { useEffect ,useState} from "react";



function Tag({className, children} : {className?: string, children: React.ReactNode}) {
  return (
    <div className="px-6 flex text-primary-800 items-center justify-center gap-3 w-fit">
        <span className="text-5xl text-center font-semibold">{children}</span>
    </div>
  )
}

export default Tag