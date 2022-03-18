function ProductsPassedData(props) {
    let products = props?.products?.entries ?? null

    if (!products) {
        return null;
    }

    return (
        <div className="grid grid-cols-6 w-full gap-6">
            {products.map((product) => (
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 bg-black bg-opacity-10 shadow-lg border border-black border-opacity-10 p-4" key={product.slug}>
                    <h3 className="title-5">{product.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default ProductsPassedData