import { useEffect, useState } from 'react';

export default function Demo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // the code that we want to run
        // setCount(count)
        console.log("The count is : ",count);
        // optional return function
        return () => {
            console.log('I am being cleaned up');
        }
    }, [count]); // the dependency array

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}