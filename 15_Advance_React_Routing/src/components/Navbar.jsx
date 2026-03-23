import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center text-black bg-blue-200 px-3 py-3 '>
                <h2 className='font-bold text-xl'>Arvind Gautam</h2>
                <div className=' flex gap-8'>
                     <Link className='text-lg font-medium' to='/'>Home</Link>
          <Link className='text-lg font-medium' to='/about'>About</Link>
          <Link className='text-lg font-medium' to='/courses'>Courses</Link>
          <Link className='text-lg font-medium' to='/product'>Product</Link>

                  </div>

            </div>
            
        </div>
      
      
    )
}

export default Navbar