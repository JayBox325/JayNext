import { useQuery } from "@apollo/client";
import ClientSideRender from "@/components/ClientSideRender";
import ProductsList from "@/components/_Examples/ProductsList";
import ProductItem from '@/components/_Examples/ProductItem'

import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

function ProductsClientSide() {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) {
        return (
            <div className="grid grid-cols-6 w-full gap-6">
                {Array.from({ length: 10 }, (_, i) => (
                    <ProductItem loading={true}/>
                ))}
            </div>
        );
    }

    if (error) {
        console.error(error);
        return null;
    }

    const products = data.entries

    return (
        <ClientSideRender>
            <ProductsList products={products} />
        </ClientSideRender>
    )
}

export default ProductsClientSide