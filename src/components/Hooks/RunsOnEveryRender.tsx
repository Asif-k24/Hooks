import { useState, useEffect } from 'react'

export default function RunsOnEveryRender() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Component redered!');
    }, [])



    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
