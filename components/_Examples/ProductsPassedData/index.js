import ProductsList from "@/components/_Examples/ProductsList";

function ProductsPassedData(props) {
    let products = props?.products?.entries ?? null

    if (!products) {
        return null;
    }

    return (
        <ProductsList products={products} />
    )
}

export default ProductsPassedData