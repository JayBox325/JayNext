import CustomLink from "@/components/CustomLink"

function ProductItem(props) {
    const product = props.product ?? null
    const title = props.product?.title ?? null
    const loading = props.loading ?? null


    if (loading) {
        return (
            <div className={`col-span-6 sm:col-span-3 lg:col-span-2 shimmer bg-gray-100 shadow-lg rounded-xl p-4 lg:p-6`}>
                <p className="title-6">&nbsp;</p>
            </div>
        )
    }

    return (
        <CustomLink href={`/products/${product?.slug}`}>
            <a className={`transition-colors hover:bg-white col-span-6 sm:col-span-3 lg:col-span-2 shadow-lg rounded-xl bg-gray-100 p-4 lg:p-6`} key={product?.slug}>
                <h3 className="title-6">{title}</h3>
            </a>
        </CustomLink>
    )
}

export default ProductItem