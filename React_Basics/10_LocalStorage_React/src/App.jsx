import React from 'react'

const App = () => {

  const user = {
    username: 'Arvind Gautam',
    role:'full stack',
    city: 'Noida'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>
      <div>
      <p>Name: {usera.username}</p>
      <p>Role: {usera.role}</p>
      <p>City: {usera.city}</p>
    </div>
    </div>
  )
}

export default App