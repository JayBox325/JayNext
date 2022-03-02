import Link from "next/link";

export default function Test() {
    return (
        <div className="w-screen bg-red-200 h-screen flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Homepage</h1>
            <p><Link href="/test"><a className="underline">Go to test</a></Link></p>
        </div>
    )
}
