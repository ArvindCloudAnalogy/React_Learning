import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  const [details, setdetails] = useState("")
  const [title, settitle] = useState("")
  const [task, settask] = useState([])

  const deleteNote = (idx) => {

    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);


  }
  const submitHandler = (e) => {

    e.preventDefault();
    const copytask = [...task];

    copytask.push({ title, details })
    settask(copytask);
    settitle('');
    setdetails('');


  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white px-4 py-6 lg:px-12 lg:py-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 w-full lg:w-1/2 p-4 lg:p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>


        <input
          type="text"
          placeholder='Enter a small title'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            settitle(e.target.value)

          }}

        />


        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setdetails(e.target.value)

          }}

        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className=' h-[90%] flex flex-wrap gap-4 mt-5 overflow-auto justify-start items-start'>
          {task.map((el, idx) => {

            return <div key={idx} className='flex flex-col justify-between h-60 w-full sm:w-52 md:w-40 bg-cover rounded-2xl p-3 text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] overflow-hidden'>
              <div className='flex-1 overflow-y-auto pr-1'>

                <h4 className='text-[15px] font-bold break-words whitespace-normal mb-1 pt-1'>{el.title}</h4>
                
                <p className='text-sm font-medium text-gray-700 break-words whitespace-normal'>{el.details}</p>

              </div>
              <button onClick={() => {
                deleteNote(idx);
              }} className='bg-red-500 py-1 rounded-2xl text-[14px] active:scale-95 font-bold w-full outline-none text-white mt-2'>Delete</button>

            </div>
          })}

        </div>

      </div>




    </div>
  )
}

export default App