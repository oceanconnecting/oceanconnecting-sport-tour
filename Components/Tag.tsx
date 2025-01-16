import { LiaStarOfLifeSolid } from "react-icons/lia";

function Tag(props : any) {

    const { icon, children} = props

  return (
    <div className="px-6 py-4 flex text-primary-200 items-center justify-center gap-3 w-fit">

        <h1 className="text-5xl font-semibold">{children}</h1>

    </div>
  )
}

export default Tag