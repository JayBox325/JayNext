import { useQuery } from "@apollo/client";
import ClientSideRender from "@/components/ClientSideRender";

import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

function Products(props) {
    let products = props?.products?.entries ?? null

    // If products are passed, then it's a Static or Serverside render block
    if (products) {

        return (
            <div>
                {products.map((product) => (
                    <div key={product.slug}>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        );

    // Otherwise, get them client-side
    } else {
        const { data, loading, error } = useQuery(GET_PRODUCTS);

        if (loading) {
            return <h2 className="loading">Fetching products</h2>;
        }
    
        if (error) {
            console.error(error);
            return null;
        }
    
        products = data.entries

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
}

export default Products