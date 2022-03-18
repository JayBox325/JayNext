function ProductsPassedData(props) {
    let products = props?.products?.entries ?? null

    if (!products) {
        return null;
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.slug}>
                    <h3>{product.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default ProductsPassedData