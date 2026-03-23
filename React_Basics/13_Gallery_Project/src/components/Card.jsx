import React from 'react'

const Card = (props) => {
  return (
    <div>

        <a href={props.elem.url} target='_blank'>
            <div className='h-40 w-full overflow-hidden rounded-lg border border-white/20'>
              <img
                src={props.elem.download_url}
                alt={props.elem.author}
                className='h-full w-full object-cover'
              />
            </div>
            <h2 className='text-sm mt-2 font-bold text-white break-words'>
              {props.elem.author}
            </h2>
          </a>
    </div>
  )
}

export default Card