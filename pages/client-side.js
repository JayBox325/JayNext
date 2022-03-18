import ProductsClientSide from "@/components/_Examples/ProductsClientSide";

export default function ClientSide() {
    return (
        <>
            <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Client Side Rendering</h1>
                <ProductsClientSide />
            </div>
        </>
    );
}