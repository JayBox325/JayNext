import clientCraft from "@/utils/apollo/clientCraft"
import GET_PRODUCTS from "@/utils/apollo/queries/getProducts"
import ProductsPassedData from "@/components/_Examples/ProductsPassedData"
import Hero from "@/components/_Examples/Hero"

export default function Static({ products }) {
    return (
        <>

            <Hero
                className="bg-green-200"
                title='Static Rendering'
                body={
                    <>
                        <p>Static rendering happens at build-time and offers a fast First Paint, First Contentful Paint and Time To Interactive - assuming the amount of client-side JS is limited.</p>
                        <p>Unlike Server Rendering, it also manages to achieve a consistently fast Time To First Byte, since the HTML for a page doesn&apost have to be generated on the fly. Generally, static rendering means producing a separate HTML file for each URL ahead of time. With HTML responses being generated in advance, static renders can be deployed to multiple CDNs to take advantage of edge-caching.</p>
                        <p>This does however only work with pages with content that very rarely change. As these have to be built before they can be delivered.</p>
                    </>
                }
            />

            <div className="row bg-green-300">
                <div className="container">
                    <h2 className="mb-4 md:mb-6 xl:mb-8">CraftCMS Products with Static Rendering</h2>
                    <ProductsPassedData products={products} />
                </div>
            </div>
        </>
    )
}

// Fetching products data - has to be done in the PAGE

export async function getStaticProps() {
    const { data } = await clientCraft.query({
        query: GET_PRODUCTS
    })

    return {
        props: {
            products: data
        },
    }
}