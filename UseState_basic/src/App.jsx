import React from 'react'
import { useState } from 'react';

const App = () => {


  const [a, setA ] = useState(20);
  const [userName,setUserName] = useState("Arvind");

function changeA(num){
  setA(num);
  setUserName("Gautam");

}

  return (
    <div> 
      <h1>Value of a is: {a}</h1>
      <h1>Name of User is: {userName}</h1>
      <button className='border-2 m-2 px-4 i' onClick={function(){

        changeA(60);
      }}>Click</button>



    </div>
  )
}

export default App