import '@/styles/globals.scss'
import Layout from '@/components/_Layout'
import TransitionHandler from '@/components/TransitionHandler'

import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apollo/client";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <TransitionHandler>
                    <Component {...pageProps} />
                </TransitionHandler>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
