// import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Create = props => {
  const todos = props.todos
  const settodos = props.settodos

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  // const [title, settitle] = useState('')

  const SubmitHandler = data => {
    console.log(data)

    data.id = nanoid()
    data.isCompleted = false
    console.log(data)
    // console.log(newtodo)
    const copytodos = [...todos]
    copytodos.push(data)
    settodos(copytodos)

    toast.success('Todo created!')
    reset()
    // settodos([...todos, data])

    // todos.push(newtodo)
  }
  console.log(todos)
  console.log(errors?.title?.message)

  return (
    <>
      <h1>Create Tasks</h1>
      <form action='' onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register('title', { required: 'title can not be empty' })}
          type='text'
          placeholder='title'
        />
        <br />
        <small>{errors?.title?.message}</small>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  )
}

export default Create
