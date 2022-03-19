import GET_PRODUCTS from "@/utils/apollo/queries/getProducts"
import GET_PRODUCT from "@/utils/apollo/queries/getProduct"
import clientCraft from "@/utils/apollo/clientCraft"
import Hero from "@/components/_Examples/Hero"

export default function Product(props) {

    if (!props.entry) {
        return null
    }

    const {
        title,
        allergens,
        extract
    } = props.entry || {}


    return (
        <>
            <Hero
                className="bg-yellow-200"
                title={title}
                body={extract}
            />

            <div className="row bg-yellow-300">
                <div className="container">
                    <div className="w-content">
                        <h2>Allergens</h2>
                        <p>This is food, so it has some allergens. And they are:</p>
                        <ul>
                            {allergens.map((allergen, i) => (
                                <li key={i}>{allergen}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}


// Get the right route from the page URL

export async function getStaticProps({ params }) {

    // Get the slug
    const { slug } = params

    // Fetch the appropriate data based on the slug
    const { data, error } = await clientCraft.query({
        query: GET_PRODUCT,
        variables: {
            slug
        }
    })

    const { entry } = data

    // Pass the data to the return above
    return {
        props:
            error ? { error } : { entry },
            revalidate: 10
    }
}

// Not sure what this is doing?...
export const getStaticPaths = async () => {
    const { data } = await clientCraft.query({
        query: GET_PRODUCTS,
    })

    const { entries } = data
    const paths = entries
        .filter(({ slug }) => !!slug)
        .map(({ slug }) => `/products/${slug}/`)

    return { paths, fallback: true }
}