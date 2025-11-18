import React from 'react'
// import style1 from './Readd.module.css'
// import './Readd.module.css'
import style1 from './Readd.module.css' 
import { toast } from 'react-toastify'
// import style from './Read.css'

const Read = props => {
//   console.log(style1)
//   console.log(style)

  const todos = props.todos
  const settodos = props.settodos

  const DeleteHandler = id => {
    // console.log(`${id}`)
    // todos.dele(id)

    const fiteredtodo = todos.filter(todo => {
      return todo.id != id
    })

    // console.log(fiteredtodo)

    settodos(fiteredtodo)
    toast.error("Todo deleteed!")
  }
  const rendertodos = todos.map(todo => {
    return (
      <li
        // style={{ color: todo.isCompleted ? 'green' : 'tomato' }}
        key={todo.id}
      >
        {todo.title} |{' '}
        <span
          onClick={() => {
            DeleteHandler(todo.id)
          }}
          style={{ cursor: 'pointer' }}
        >
          Delete
        </span>
      </li>
    )
  })

  return (
    <>
      <hr />
      <h1 className={`${style1.read_list_heading}`}>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>
  )
}

export default Read
