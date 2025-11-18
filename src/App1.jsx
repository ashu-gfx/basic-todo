import React, { useState } from 'react'

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: 'kaam karle bhai', isCompleted: false }
  ])

  const [title, settitle] = useState('')
  const [completed, setcompleted] = useState(false)
  const [gender, setgender] = useState('male')
  const [city, setcity] = useState('mumbai')

  return (
    <div>
      <h1>Create Tasks</h1>
      <form action=''>
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
        <input
          checked={completed}
          type='checkbox'
          onChange={e => {
            setcompleted(e.target.checked)
          }}
        />{' '}
        Completed
        <br />
        <br />
        <input
          value='male'
          type='radio'
          onChange={e => {
            setgender(e.target.value)
          }}
          checked={gender == 'male' && true}
        />
        male
        <br />
        <br />
        <input
          value='female'
          type='radio'
          onChange={e => {
            setgender(e.target.value)
          }}
          checked={gender == 'female' && true}
        />
        female
        <br />
        <br />
        <select value={city} onChange={e => setcity(e.target.value)}>
          <option value='delhi'>Delhi</option>
          <option value='mumbai'>Mumbai</option>
          <option value='kolkata'>Kolkata</option>
        </select>
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App
