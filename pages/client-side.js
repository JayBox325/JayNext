import ProductsClientSide from "@/components/_Examples/ProductsClientSide";

export default function ClientSide() {
    return (
        <>
            <div className="row bg-red-200">
                <div className="container">
                    <div className="">
                        <h1 className="mb-4">Client-Side Rendering</h1>
                        <div className="w-content max-w-2xl mb-4">
                            <p>Client-side rendering (CSR) means rendering pages directly in the browser when the user arrives on it using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.</p>
                            <p>This leads to faster page-load times, but the content loads after the fact. This will include 'Loading' states while the content is fetched and rendered.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bg-red-300">
                <div className="container">
                    <h2 className="mb-4 md:mb-6 xl:mb-8">CraftCMS Products with CSR</h2>
                    <ProductsClientSide />
                </div>
            </div>
            
        </>
    );
}