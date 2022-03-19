import ProductsClientSide from "@/components/_Examples/ProductsClientSide"
import Hero from "@/components/_Examples/Hero"

export default function ClientSide() {
    return (
        <>

            <Hero
                className="bg-red-200"
                title='Client-Side Rendering'
                body={
                    <>
                        <p>Client-side rendering (CSR) means rendering pages directly in the browser when the user arrives on it using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.</p>
                        <p>This leads to faster page-load times, but the content loads after the fact. This will include &aposLoading&apos states while the content is fetched and rendered.</p>
                    </>
                }
            />

            <div className="row bg-red-300">
                <div className="container">
                    <h2 className="mb-4 md:mb-6 xl:mb-8">CraftCMS Products with CSR</h2>
                    <ProductsClientSide />
                </div>
            </div>
            
        </>
    )
}