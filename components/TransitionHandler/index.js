import { useState, useEffect } from 'react'
import Layout from '@/components/_Layout';

export default function TransitionHandler(props) {
    const { children } = props || {};

    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fade-out");

    useEffect(() => {
        setTransitionStage("fade-in");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) {
            setTransitionStage("fade-out")
        }
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div
            onTransitionEnd={() => {
                if (transitionStage === "fade-out") {
                    window.scrollTo(0, 0);
                    setDisplayChildren(children);
                    setTransitionStage("fade-in");
                }
            }}
            className={`content relative z-10 ${transitionStage}`}
        >
            {displayChildren}
        </div>
    )
}
