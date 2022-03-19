import clientCraft from "@/utils/apollo/clientCraft"
import GET_PRODUCTS from "@/utils/apollo/queries/getProducts"
import ProductsPassedData from "@/components/_Examples/ProductsPassedData"
import Hero from "@/components/_Examples/Hero"

export default function ServerSide({ products }) {
    return (
        <>

            <Hero
                className="bg-blue-200"
                title='Server-Side Rendering'
                body={
                    <>
                        <p>Server-side rendering (SSR) is an application&aposs ability to convert HTML files on the server into a fully rendered HTML page for the client. The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client.</p>
                        <p>This means the user has to wait for the server to recieve the response, source the data and render the template. Which can be longer.</p>
                    </>
                }
            />

            <div className="row bg-blue-300">
                <div className="container">
                    <h2 className="mb-4 md:mb-6 xl:mb-8">CraftCMS Products with SSR</h2>
                    <ProductsPassedData products={products} />
                </div>
            </div>
        </>
    )
}

// Fetching products data - has to be done in the PAGE.

export async function getServerSideProps() {
    const { data } = await clientCraft.query({
        query: GET_PRODUCTS
    })

    return {
        props: {
            products: data
        },
    }
}