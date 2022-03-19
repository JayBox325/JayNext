import { gql } from '@apollo/client'

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
                availableAt {
                    title
                    slug
                }
            }
        }
    }
`

export default GET_PRODUCT
