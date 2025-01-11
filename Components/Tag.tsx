

function Tag(props : any) {

    const { icon, children} = props

  return (
    <div className="px-6 py-4 flex items-center justify-center gap-3 border w-fit border-primary-50 rounded-full">
        {icon}
        {children}
        {icon}
    </div>
  )
}

export default Tag