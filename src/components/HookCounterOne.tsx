import { useState, useEffect } from 'react'

export default function HookCounterOne() {

  const [count, setCount]: any = useState(0)

  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}