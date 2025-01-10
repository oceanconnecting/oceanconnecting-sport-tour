import Link from "next/link"

function Navbar() {

    const navbarLink = [
        {
            title : "item",
            link : "/"
        },
        {
            title : "item",
            link : "/"
        },
        {
            title : "item",
            link : "/",
            subItems : [
                {
                    title : "sub item",
                    link : "/",
                },
                {
                    title : "sub item",
                    link : "/",
                },
                {
                    title : "sub item",
                    link : "/",
                },
            ]
        },
        {
            title : "item",
            link : "/"
        },
        {
            title : "item",
            link : "/"
        },
    ]

    return (
    <section>
        <div className='flex w-screen h-16 bg-slate-100 items-center sm:px-5 lg:px-16'>
            <div className='flex-1'>
                <h1>Ocean Sport Tours</h1>
            </div>
            <div className="flex gap-3">
                {
                    navbarLink.map((link, idx) => (
                        !link.subItems ? (
                            <div key={idx}>
                                <Link className="px-3" href={link.link}>{link.title}</Link>
                            </div>
                        ) : (
                            <div className="relative inline-block group px-3" key={idx}>
                                <Link href={link.link}>{link.title}</Link>
                                <div className="pt-5 absolute hidden group-hover:block">
                                    <ul className="bg-slate-600 pt-3 px-3">
                                        {
                                            link.subItems.map((sublink, idx) => (
                                                <li className="block w-fit pb-3" key={idx}><Link className="px-3 text-nowrap" href={sublink.link}>{sublink.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Navbar