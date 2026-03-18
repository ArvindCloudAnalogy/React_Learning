import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' flex  gap-10 pb-16 pt-5 px-18 items-center justify-between h-[90vh] '>
        <LeftContent/>
        <RightContent user={props.users}/>


    </div>
  )
}

export default Page1Content