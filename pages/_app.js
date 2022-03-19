import '@/styles/globals.scss'
import Layout from '@/components/_Layout'

import { ApolloProvider } from "@apollo/client"
import clientCraft from "@/utils/apollo/clientCraft"

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={clientCraft}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
