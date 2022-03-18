import '@/styles/globals.scss'
import Layout from '@/components/_Layout'
import TransitionHandler from '@/components/TransitionHandler'

import { ApolloProvider } from "@apollo/client";
import clientCraft from "@/utils/apollo/clientCraft";

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={clientCraft}>
            <Layout>
                <TransitionHandler>
                    <Component {...pageProps} />
                </TransitionHandler>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
