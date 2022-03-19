export const imageSchema = `
    filename
    title
    width
    height
    ... on media_Asset {
        imageTransform {
            srcsetWebp
            placeholderImage
            src
            colorPalette
        }
    }
`
