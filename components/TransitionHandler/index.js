import { useState, useEffect } from 'react'

export default function TransitionHandler({ children }) {
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
        <div>

            <div className="fixed top-5 z-50 left-5">
                <p>JayNext</p>
            </div>

            <div
                onTransitionEnd={() => {
                    if (transitionStage === "fade-out") {
                        setDisplayChildren(children);
                        setTransitionStage("fade-in");
                    }
                }}
                className={`content relative z-10 ${transitionStage}`}
            >
                {displayChildren}
            </div>

        </div>
    )
}
