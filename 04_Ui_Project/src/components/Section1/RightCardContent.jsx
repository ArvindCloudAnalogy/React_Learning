import React from 'react'

const RightCardContent = (props) => {
    const [hovered, setHovered] = React.useState(false)
    const btnColor = props.color || '#2563eb'
    const btnStyle = {
        backgroundColor: btnColor,
        filter: hovered ? 'brightness(1.15)' : 'brightness(1)',
        transition: 'filter 0.2s ease',
    }

    return (
        <div className='p-7 justify-between flex flex-col absolute top-0 left-0 h-full w-full bg-linear-to-t from-black/80 via-black/40 to-transparent text-white'>
            <h2 className='bg-white/20 text-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>{props.id + 1}</h2>
            <div>
                <p className='text-lg leading-relaxed mb-14'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={btnStyle}
                        className='text-lg px-8 py-2 font-medium text-white rounded-full'
                    >
                        {props.tag}
                    </button>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={btnStyle}
                        className='text-lg rounded-full px-4 py-2 font-medium text-white'
                    >
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default RightCardContent