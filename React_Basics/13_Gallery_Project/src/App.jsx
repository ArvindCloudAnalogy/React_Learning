import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1)

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);

    setuserData(response.data);

  }
  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = <h3 className='font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xl'>
   Loading...</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (

        <div key={elem.id || idx} className='w-44'>
          <Card elem = {elem}/>
        
        </div>
      )

    })
  }
  return (
    <div className='bg-black h-screen overflow-hidden p-4 m-2 text-white relative'>
      <div className='h-full overflow-y-auto pb-28 scrollbar-hidden'>
        <div className='flex flex-wrap justify-center gap-4'>
          {printUserData}
        </div>
      </div>

      <div className='fixed bottom-3 left-0 right-0 flex justify-center items-center p-4 gap-5 bg-black/75 backdrop-blur'>
        <button
          
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          onClick={() => {
            setuserData([]);
            if (index > 1) {
              setindex(index - 1);
            }
          }}
          className='bg-amber-400 active:scale-[95%] text-sm cursor-pointer text-black rounded px-6 py-2 font-semibold'>
          Prev
        </button>
        <h4>Page {index} </h4>
        <button
          onClick={() => {
            setuserData([]);
            setindex(index + 1);
          }}
          className='bg-amber-400 active:scale-[95%] text-sm cursor-pointer text-black rounded px-6 py-2 font-semibold'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App