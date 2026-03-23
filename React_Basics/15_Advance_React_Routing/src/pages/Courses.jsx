import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  const courses = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Advanced React' },
    { id: 3, title: 'JavaScript Fundamentals' },
  ];

  return (
    <div>
         <h1>Courses Page</h1>
         <ol >
           {courses.map(course => (
             <li key={course.id}>
               <Link to={`/courses/${course.id}`}>{course.title}</Link>
             </li>
           ))}
         </ol>
    </div>
  )
}

export default Courses