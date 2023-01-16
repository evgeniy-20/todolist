import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


function AddTodo({todo, setTodo}) {
  const [value, setValue] = useState('');
  

  function saveTodo() {
    setTodo (
      [...todo, {
          id: uuidv4(),
          title: value,
          status: true
      }]
    )
    setValue('')
  }
  return (
      <div className='addTodoForm'>
        <input placeholder='Name...' value={value} onChange={(e) => setValue(e.target.value)} className='name' />
        <button variant="light" onClick={saveTodo} className='item'>Add item</button>
      </div>
  )
}

export default AddTodo