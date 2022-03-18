import { useQuery } from "@apollo/client";
import ClientSideRender from "@/components/ClientSideRender";

import GET_PRODUCTS from "@/utils/apollo/queries/getProducts";

function ProductsClientSide() {
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) {
        return (
            <div className="grid grid-cols-6 w-full gap-6">
                {Array.from({ length: 10 }, (_, i) => (
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 bg-red-300 shadow-lg border border-black border-opacity-10 p-4 shimmer" key={i}>
                        <h3 className="title-5">&nbsp;</h3>
                    </div>
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
            <div className="grid grid-cols-6 w-full gap-6">
                {products.map((product) => (
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2 bg-red-300 shadow-lg border border-black border-opacity-10 p-4" key={product.slug}>
                        <h3 className="title-5">{product.title}</h3>
                    </div>
                ))}
            </div>
        </ClientSideRender>
    )
}

export default ProductsClientSide