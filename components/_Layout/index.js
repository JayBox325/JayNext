import Header from "./Header"
import Footer from "./Footer"
import TransitionHandler from '@/components/TransitionHandler'

export default function Layout(props) {
    const { children } = props || {}

    return (
        <>
            <Header />
            <main>
                <TransitionHandler>
                    {children}
                    <Footer />
                </TransitionHandler>
            </main>
        </>
    )
}