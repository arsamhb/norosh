import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {}

const Nav = (props: Props) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    useEffect(() => {
        console.log(isNavOpen);
    }, [isNavOpen])
    const navbarLinks = [
        {
            title: "خانه",
            routeTo: "/",
        },
        {
            title: "درباره ما",
            routeTo: "/",
        },
        {
            title: "ورود",
            routeTo: "/auth",
        },
        {
            title: "سوالات متداول",
            routeTo: "/faq",
        },
    ]

    return (
        <nav className={`relative top-0 right-0 w-screen`}>
            <button
                onClick={() => { setIsNavOpen((s) => s ? false : true) }}
                className="border-2 border-red-900 rounded-full w-8 h-8 absolute top-2 right-2 z-50"
            >
                X
            </button>
            <ul className={`absolute bg-red-700 w-[250px] flex flex-col gap-4 px-4 py-12 overflow-hidden h-screen top-0 ${isNavOpen ? "right-[0px]" : "right-[-250px]"}`}>
                {navbarLinks.map((item, index) =>
                    <li key={index}>
                        <Link href={item.routeTo}>{item.title}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav