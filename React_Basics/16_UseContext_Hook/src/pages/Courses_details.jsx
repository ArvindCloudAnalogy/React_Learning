import React from 'react'
import { useParams } from 'react-router-dom'

const Courses_details = () => {

    const params = useParams();

  return (
    <div>
        <h1>{params.id} Courses Details Page</h1>
    </div>
  )
}

export default Courses_details