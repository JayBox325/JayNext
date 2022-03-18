import Link from "next/link";
import { useState, useEffect } from 'react'

export default function Header(props) {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className={`fixed top-0 z-50 py-4 md:py-6 xl:py-8 left-0 w-full transition-colors ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="container flex flex-row justify-between">
                <Link href="/">JayNext</Link>
                <ul className="flex flex-row space-x-2 md:space-x-4 xl:space-x-6">
                    <li>
                        <Link href="/client-side/" scroll={false}>
                            <a className="hover:underline">Client Side</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/server-side/" scroll={false}>
                            <a className="hover:underline">Server Side</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/static/" scroll={false}>
                            <a className="hover:underline">Static</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}