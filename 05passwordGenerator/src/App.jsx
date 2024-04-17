import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef=useRef(null)

  const copyPasswordToClipboard = useCallback(() =>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){str+="0123456789"}

    if(charAllowed){str+="!@#$%^&*()-_{}[]~`"}

    for(let i=1;i<=length;i++){
      let charidx = Math.floor(Math.random()*str.length +1)
      
      pass += str.charAt(charidx)

    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full  mx-auto shadow-md bg-gray-800 rounded-lg py-4 px-4 my-8 text-orange-500'>
            <h1 className='text-white text-center m-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" 
              value={password}
              className='outline-none w-full py-1 px-3 rounded-lg m-1'
              placeholder='Password'
              readOnly
              ref={passRef}
              />
              <button className='m-1 outline-none'           
              onClick={copyPasswordToClipboard}
              >Copy</button>
            </div>
            <div className='flex text-sm gap-x-2 justify-between'>
              <div className='flex items-center gap-x-1'>
                <input type="range"
                min={8}
                max={25}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label htmlFor="length">Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() =>{
                  setNumberAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="numberAllowed">Number</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={ charAllowed}
                id="charInput"
                onChange={() =>{
                  setCharAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="numberAllowed">Character</label>
              </div>
              
            </div>

    </div>
    </>
  )
}

export default App
