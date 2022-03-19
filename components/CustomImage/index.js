import Image from 'next/image'

function CustomImage(props) {
    const {
        image,
        className
    } = props || {}

    console.log('image', image)

    return (
        <>
            {image.map(
                ({
                    imageTransform: {
                        srcsetWebp: path
                    },
                }) => (
                    <Image
                        key={path}
                        src={path}
                        className={className}
                        alt=''
                        width=''
                        height=''
                    />
                )
            )}
        </>
    )
}

export default CustomImage