import { gql } from '@apollo/client'
import { imageSchema } from '@/utils/apollo/fragments/imageSchema';

export const GET_PRODUCT = gql`
    query GetProduct($slug: String) {
        entry(slug: [$slug]) {
            ... on products_food_Entry {
                id
                extract
                description
                price
                title
                allergens
                relatedProducts {
                    title
                    slug
                }
                featuredImage {
                    ${imageSchema}
                }
            }
        }
    }
`

export default GET_PRODUCT
