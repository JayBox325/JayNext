import Link from "next/link";

export default function Header(props) {
    return (
        <div className="fixed top-5 z-50 left-0 flex px-5 flex-row justify-between w-full">
            <Link href="/">JayNext</Link>
            <ul className="flex flex-row space-x-2">
                <li>
                    <Link href="/client-side/">Client Side</Link>
                </li>
                <li>
                    <Link href="/server-side/">Server Side</Link>
                </li>
                <li>
                    <Link href="/static/">Static</Link>
                </li>
            </ul>
        </div>
    )
}