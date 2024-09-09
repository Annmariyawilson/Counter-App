import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counterapp from './Counterapp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-light text-center mt-5'>COUNTER APP</h1>
     <Counterapp/>
     </>
  )
}

export default App
