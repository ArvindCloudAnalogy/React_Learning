import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Arvind Gautam" img="https://plus.unsplash.com/premium_photo-1678249204369-d7582731335d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user="Pawan"  img ="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App