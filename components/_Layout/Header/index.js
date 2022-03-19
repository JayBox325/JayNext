import CustomLink from "@/components/CustomLink"
import { useState, useEffect } from 'react'

export default function Header(props) {
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll) 
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <div className={`fixed top-0 z-50 py-4 md:py-6 xl:py-8 left-0 w-full transition-colors ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="container flex flex-row justify-between">
                <CustomLink href="/"><a>JayNext</a></CustomLink>
                <ul className="flex flex-row space-x-2 md:space-x-4 xl:space-x-6">
                    <li>
                        <CustomLink href="/client-side/">
                            <a className="hover:underline">Client Side</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/server-side/">
                            <a className="hover:underline">Server Side</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/static/">
                            <a className="hover:underline">Static</a>
                        </CustomLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}