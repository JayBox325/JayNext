import Countries from "@/components/Countries";
import MexTest from "@/components/MexTest";

export default function ClientSide() {
    return (
        <>
            <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Client Side Rendering</h1>
                <Countries dataType='client' />
            </div>
            <div className="w-full bg-blue-200 h-screen flex items-center flex-col justify-center text-center">
                <MexTest />
            </div>
        </>
    );
}