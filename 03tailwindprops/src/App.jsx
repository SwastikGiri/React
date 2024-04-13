import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "hitesh",
    age: 21
  }
  let arr=[1,2,3,4]
  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="chaiaurcode" btntext="Click me"/>
     <Card username="Hello" btntext="Read more.."/>
     <Card />
    </>
  )
}

export default App
