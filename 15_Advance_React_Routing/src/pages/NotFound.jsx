import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-full flex items-center justify-center bg-black px-4 py-10'>
      <div className='w-full max-w-5xl text-center'>
        <h1 className='inline-block bg-red-600 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white rounded-2xl px-5 py-4 leading-tight max-w-full break-words'>
          404 | Page Not Found
        </h1>
        <p className='mt-6 text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto'>
          The page you’re looking for doesn’t exist or has been moved. Use navigation to return home.
        </p>
        <Link
          to='/'
          className='mt-8 inline-block bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-semibold py-3 px-5 rounded-xl transition-colors'
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound