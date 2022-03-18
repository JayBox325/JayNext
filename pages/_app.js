import '@/styles/globals.scss'
import Layout from '@/components/_Layout'
import TransitionHandler from '@/components/TransitionHandler'

import { ApolloProvider } from "@apollo/client";
import clientMex from "@/utils/apollo/clientMex";
import clientCountries from "@/utils/apollo/clientCountries";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={clientCountries}>
            <Layout>
                <TransitionHandler>
                    <Component {...pageProps} />
                </TransitionHandler>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
