import { useQuery } from "@apollo/client";
import ClientSideRender from "@/components/ClientSideRender";

import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

function MexTest() {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const products = data.entries

    console.log(products)

    return (
        <>
            <p>Client side mex Test.</p>
            <ClientSideRender>
                <div>
                    {products.map((product) => (
                        <div key={product.slug}>
                            <h3>{product.title}</h3>
                        </div>
                    ))}
                </div>
            </ClientSideRender>
        </>
    );
}

export default MexTest