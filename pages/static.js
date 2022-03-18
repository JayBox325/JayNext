import clientCraft from "@/utils/apollo/clientCraft";
import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

export default function Static({ products }) {
    return (
        <>
            <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
                <h1 className="text-2xl font-bold mb-4">Static Rendering</h1>
                {/* <Countries dataType='static' countries={countries}/> */}
            </div>
        </>
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