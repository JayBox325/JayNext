import clientCraft from "@/utils/apollo/clientCraft";
import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";
import Products from "@/components/_Examples/Products";

export default function Static({ products }) {
    return (
        <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Static Rendering</h1>
            <Products products={products} />
        </div>
    )
}

// Fetching products data - has to be done in the PAGE

export async function getStaticProps() {
    const { data } = await clientCraft.query({
        query: GET_PRODUCTS
    });

    return {
        props: {
            products: data
        },
    };
}