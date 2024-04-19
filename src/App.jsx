import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() =>
  {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz"

    if(numberAllowed){ str += "0123456789"}
    if(charAllowed){ str += "!@#$%^&*()_+[]{}"}

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * length) ;

      pass = pass + str.charAt(char);
      
    }
    setPassword(pass);
    
  }
  , [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
