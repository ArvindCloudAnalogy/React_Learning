import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border-2 items-center m-2 p-2 justify-center rounded-2xl'>
      <h1 className='font-extrabold '>UnderStanding Hooks</h1>
       <p className='flex'> <h2>useState</h2>   :- manages states, </p> 
       <p className='flex'> <h2>useEffect</h2>   :- handle side effects side stack side another processes,  </p> 
       <p className='flex'> <h2>useContext</h2>   :- manages global context or global state,  </p> 
       <p className='flex'> <h2>useReducer</h2>   :- manages complex state,  </p> 
       <p className='flex'> <h2>useRef</h2>   :- Access DOM elements , hold mutable values,  </p> 
       <p className='flex'> <h2>useMemo & useCallback</h2>   :- use for optimisation , avoid rerendering. </p> 
    


    </div>
  )
}

export default App
