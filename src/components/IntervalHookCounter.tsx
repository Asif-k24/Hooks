import { useState, useEffect } from 'react'

export default function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count => count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}
