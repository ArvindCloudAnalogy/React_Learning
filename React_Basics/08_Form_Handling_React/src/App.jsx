import React, { useState } from 'react'



const App = () => {

  const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted ");
    settitle('');

  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);

      }}>
        <input type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        
        />

        <button>Submit</button>
        <p>{title}</p>
      </form>



    </div>
  )
}

export default App