import { useState, useEffect } from 'react'

export default function TransitionHandler(props) {
    const { children } = props || {}

    const [displayChildren, setDisplayChildren] = useState(children)
    const [transitionStage, setTransitionStage] = useState('fadeOut')

    useEffect(() => {
        setTransitionStage('fadeIn')
    }, [])

    useEffect(() => {
        if (children !== displayChildren) {
            setTransitionStage('fadeOut')
        }
    }, [children, setDisplayChildren, displayChildren])

    return (
        <div
            onTransitionEnd={() => {
                if (transitionStage === 'fadeOut') {
                    window.scrollTo(0, 0)
                    setDisplayChildren(children)
                    setTransitionStage('fadeIn')
                }
            }}
            className={`transition-opacity duration-500 ${transitionStage == 'fadeIn' ? 'opacity-100' : 'opacity-0'}`}
        >
            {displayChildren}
        </div>
    )
}
