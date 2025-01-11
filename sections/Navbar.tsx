"use client"
import Link from "next/link"
import { useTranslations } from "use-intl"
import { PiUmbrellaThin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LanguageSwitcher from "@/Components/LanguageSwitcher";

function Navbar() {

    const t = useTranslations("homepage.navbar")

    const navbarLink = [
        {
            title : t("about"),
            link : "/"
        },
        {
            title : t("services_title"),
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
    <section className="fixed">
        <div className='flex w-screen h-16 bg-white shadow-md items-center sm:px-5 lg:px-16'>
            <div className='flex-1 flex gap-3 items-center'>
                <div><PiUmbrellaThin /></div>
                <h1>{t("title")}</h1>
            </div>
            <div className="flex gap-3 items-center">
                {
                    navbarLink.map((link, idx) => (
                        !link.subItems ? (
                            <div key={idx}>
                                <Link className="px-3 hover:text-primary-300 transition" href={link.link}>{link.title}</Link>
                            </div>
                        ) : (
                            <div className="relative inline-flex justify-center group px-3" key={idx}>
                                <div className="flex gap-1 justify-center items-center"><RiArrowDropDownLine className="group-hover:rotate-180 transition duration-20 cursor-pointer"/><Link className="group-hover:text-primary-300" href={link.link}>{link.title}</Link></div>
                                <div className="pt-11 absolute hidden group-hover:block">
                                    <ul className="bg-white shadow-md pt-3 px-3">
                                        {
                                            link.subItems.map((sublink, idx) => (
                                                <li className="block w-fit pb-3" key={idx}><Link className="px-3 text-nowrap hover:text-primary-300" href={sublink.link}>{sublink.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    ))
                }
                <LanguageSwitcher/>
            </div>
        </div>
    </section>
  )
}

export default Navbar