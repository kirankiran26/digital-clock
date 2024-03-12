import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Digitalclock from './clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Digitalclock/>
    </>
  )
}

export default App
