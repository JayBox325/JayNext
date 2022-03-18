import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientMex = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_CLUB_MEX_CMS_GRAPHQL_URL,
    cache: new InMemoryCache(),
    fetchPolicy: 'no-cache',
});

export default clientMex