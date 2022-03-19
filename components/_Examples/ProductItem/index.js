function ProductItem(props) {
    const product = props.product ?? null
    const title = props.product?.title ?? '&nbsp;'
    const loading = props.loading ?? null


    return (
        <div className={`${loading ? 'shimmer' : ''} col-span-6 sm:col-span-3 lg:col-span-2 bg-white shadow-lg rounded-xl bg-white p-4 lg:p-6`} key={product?.slug}>
            <h3 className="title-6" dangerouslySetInnerHTML={{__html: title}} />
        </div>
    )
}

export default ProductItem