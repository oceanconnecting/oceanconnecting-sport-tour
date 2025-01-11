"use client"
import Link from "next/link"
import { useTranslations } from "use-intl"

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

    const t = useTranslations("homepage.navbar")

    return (
    <section className="fixed">
        <div className='flex w-screen h-16 bg-slate-100 shadow-md items-center sm:px-5 lg:px-16'>
            <div className='flex-1'>
                <h1>{t("title")}</h1>
            </div>
            <div className="flex gap-3">
                {
                    navbarLink.map((link, idx) => (
                        !link.subItems ? (
                            <div key={idx}>
                                <Link className="px-3" href={link.link}>{link.title}</Link>
                            </div>
                        ) : (
                            <div className="relative inline-flex justify-center group px-3" key={idx}>
                                <Link href={link.link}>{link.title}</Link>
                                <div className="pt-11 absolute hidden group-hover:block">
                                    <ul className="bg-slate-600 shadow-md pt-3 px-3">
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