import { useState, useEffect } from 'react'

export default function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = ((e: any) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  })

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}