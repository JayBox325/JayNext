import '@/styles/globals.scss'
import TransitionHandler from '@/components/TransitionHandler'

function MyApp({ Component, pageProps }) {
    return (
        <TransitionHandler>
            <Component {...pageProps} />
        </TransitionHandler>
    )
}

export default MyApp
