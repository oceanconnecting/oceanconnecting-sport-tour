"use client"
import Link from "next/link"
import { useTranslations } from "use-intl"
import { CiGlobe } from "react-icons/ci";

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
    
    const avalaibleLang = [
        {
            title : 'en'
        },
        {
            title : 'fr'
        },
        {
            title : 'ar'
        },
    ]

    const t = useTranslations("homepage.navbar")

    return (
    <section className="fixed">
        <div className='flex w-screen h-16 bg-white shadow-md items-center sm:px-5 lg:px-16'>
            <div className='flex-1'>
                <h1>{t("title")}</h1>
            </div>
            <div className="flex gap-3 items-center">
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
                                    <ul className="bg-white shadow-md pt-3 px-3">
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
                <div className="cursor-pointer relative inline-flex justify-center group">
                    <div className="flex gap-1">
                        <CiGlobe className="text-2xl"/>
                        <h1>en</h1>
                    </div>
                    <div className="pt-11 absolute hidden group-hover:block">
                        <ul className="bg-white shadow-md pt-3 px-3">
                            {avalaibleLang.map((lang, idx) =>(
                                <li className="block w-9 pb-3" key={idx}>{lang.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar