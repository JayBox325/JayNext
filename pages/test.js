import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="w-full bg-green-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Test page</h1>
                <p><Link href="/" scroll={false}><a className="underline">Go home</a></Link></p>
            </div>
            <div className="w-full bg-yellow-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Test page</h1>
                <p><Link href="/" scroll={false}><a className="underline">Go home</a></Link></p>
            </div>
        </>
    )
}
