import Image from 'next/image'
import { Fragment } from 'react'

function CustomImage(props) {
    const {
        image,
        className
    } = props || {}

    return (
        <>
            {image.map((image, i) => {
                const {
                    imageTransform
                } = image || {}

                return (
                    <Fragment key={i}>
                        {console.log('image', image)}
                        <picture className={className}>
                            <source srcSet={imageTransform.srcsetWebp} type="image/webp" />
                            <source srcSet={imageTransform.srcsetWebp} type="image/jpeg" />
                            <img
                                className={className}
                                style={{ background: imageTransform.colorPalette[0] }}
                                src={imageTransform.src}
                                loading="lazy"
                                alt=""
                            />
                        </picture>
                    </Fragment>
                )
            })}
        </>
    )
}

export default CustomImage