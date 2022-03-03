import '@/styles/globals.scss'
import Layout from '@/components/_Layout'
import Header from "@/components/_Layout/Header";
import Footer from "@/components/_Layout/Footer";
import TransitionHandler from '@/components/TransitionHandler'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <TransitionHandler>
                <Component {...pageProps} />
            </TransitionHandler>
        </Layout>
    )
}

export default MyApp
