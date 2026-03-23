import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

  let navigate = useNavigate();
  const Next = ()=>{
    navigate(+1);

    
  }
  const Back = ()=>{
    navigate(-1);

  }

  return (
    <div className=' py-2 bg-blue-400 px-6 justify-between font-bold text-black w-full' >
      <div className=' flex items-center gap-10'>
       <button 
       onClick={()=>{
        navigate('/');

       }}
       className='font-bold text-[14px] bg-green-500  rounded-2xl px-2 py-2  active:scale-[95%]'>
        
        Return to Home Page</button>
        <div className='gap-10 '>
          <button
            onClick={() => {
              Back();
            }}
            className=' active:scale-[95%] bg-green-500 py-1 px-3 rounded-2xl items-center'>



            Back</button>

        </div>
        <div>
          <button
            onClick={() => {
              Next();
            }}
            className=' active:scale-[95%] bg-green-500 py-1 px-3 rounded-2xl items-center'>
            Next</button></div>


      </div>
    </div>
  )
}

export default Navbar2