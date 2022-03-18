import { ApolloClient, InMemoryCache } from '@apollo/client';

const countriesUri = 'https://countries.trevorblades.com'

const clientCountries = new ApolloClient({
    uri: countriesUri,
    cache: new InMemoryCache(),
    fetchPolicy: 'no-cache',
});

export default clientCountries