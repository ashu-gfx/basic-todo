import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = props => {
  const todos = props.todos
  const settodos = props.settodos

  const [title, settitle] = useState('')

  const SubmitHandler = e => {
    e.preventDefault()
    console.log(title)
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false
    }
    // console.log(newtodo)
    // const copytodos = [...todos]
    // copytodos.push(newtodo)
    // settodos(copytodos)

    settodos([...todos, newtodo])

    // todos.push(newtodo)
    console.log(todos)
  }

  return (
    <>
      <h1>Create Tasks</h1>
      <form action='' onSubmit={SubmitHandler}>
        <input
          type='text'
          placeholder='title'
          onChange={e => {
            settitle(e.target.value)
            // console.log(title)
          }}
          value={title}
        />
        <br />
        <br />

        <button>Create Todo</button>
      </form>
    </>
  )
}

export default Create
