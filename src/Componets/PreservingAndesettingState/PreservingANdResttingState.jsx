import { useState } from "react";

export const PreservingState = () => {
    const [showB, setShowB] = useState(true);
    return (
        <>
            <Counter />
            {showB && <Counter />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </>
    )
}

export const Counter = () => {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
    let className = "counter";
    if (hover) {
        className += " hover"
    }

    return (
        <div className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>Add One</button>
        </div>
    )
}