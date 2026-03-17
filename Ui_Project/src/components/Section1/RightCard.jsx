import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full w-80 shrink-0 relative overflow-hidden rounded-4xl'>
            <img className="w-full h-full object-cover" src={props.img} alt="" />
           <RightCardContent
           color={props.color}
           tag={props.tag} 
           intro = {props.intro}
           id = {props.id}
           />

        </div>
    )
}

export default RightCard