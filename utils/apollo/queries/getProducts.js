import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
    query GetProducts {
        entries(type: ["food", "drink"]) {
            slug
            title
            typeHandle
        }
    }
`;

export default GET_PRODUCTS;
