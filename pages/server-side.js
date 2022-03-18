import clientCraft from "@/utils/apollo/clientCraft";
import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";
import ProductsPassedData from "@/components/_Examples/ProductsPassedData";

export default function ServerSide({ products }) {
    return (
        <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Server Side Rendering</h1>
                <ProductsPassedData products={products} />
        </div>
    )
}

// Fetching products data - has to be done in the PAGE.

export async function getServerSideProps() {
    const { data } = await clientCraft.query({
        query: GET_PRODUCTS
    });

    return {
        props: {
            products: data
        },
    };
}