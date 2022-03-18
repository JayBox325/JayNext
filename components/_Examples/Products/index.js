import { useQuery } from "@apollo/client";
import ClientSideRender from "@/components/ClientSideRender";

import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

function Products() {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) {
        return <h2 className="loading">Fetching products</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const products = data.entries

    return (
        <ClientSideRender>
            <div>
                {products.map((product) => (
                    <div key={product.slug}>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </ClientSideRender>
    );
}

export default Products