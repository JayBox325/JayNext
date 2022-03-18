import Products from "@/components/_Examples/Products";

export default function ClientSide() {
    return (
        <>
            <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Example Products</h1>
                <Products />
            </div>
        </>
    );
}