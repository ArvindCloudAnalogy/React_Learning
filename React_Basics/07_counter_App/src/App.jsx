import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cnt, setcnt] = useState(0)


  function increment(){
    setcnt(cnt+1)

  }
  function decrement(){
setcnt(cnt-1)
if(cnt<1){
  setcnt(0);
}

  }
  return (
    <div className='cnt'>
      <div className='h1'>
        <h1>{cnt}</h1>
      </div>
      <div>

        <button onClick={() => {
          increment();
        }}>Increment</button>


        <button onClick={() => {
          decrement();
        }}>Decrement</button>

      </div>


    </div>
  )
}

export default App
