import Link from 'next/link'

function CustomLink(props) {
    const {
        href,
        children
    } = props || {}

    return (
        <Link href={href} scroll={false}>
            {children}
        </Link>
    )
}

export default CustomLink