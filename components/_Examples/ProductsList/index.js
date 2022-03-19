import ProductItem from '@/components/_Examples/ProductItem'

function ProductsList(props) {
    const products = props.products ?? null

    if (!products) {
        return null
    }

    return (
        
        <div className="grid grid-cols-6 w-full gap-6">
            {products.map((product, i) => (
                <ProductItem key={i} product={product} />
            ))}
        </div>
    )
}

export default ProductsList