
import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: 'kaam karle bhai', isCompleted: false }
  ])

   return (
    <>
      <Create todos={todos} settodos={settodos} />
      <Read  todos={todos} settodos={settodos}/>
    </>
  )
}

export default App
