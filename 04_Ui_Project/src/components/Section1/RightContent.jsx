import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id="right-content" className='h-full p-5 w-2/3 flex flex-nowrap gap-10 overflow-auto'>

            {props.user.map((user, index) => {
                return <RightCard
                color={user.color}
                    img={user.img}
                    intro={user.intro}
                    tag={user.tag}
                    id={index}
                    key={index} />
            })}

        </div>
    )
}

export default RightContent