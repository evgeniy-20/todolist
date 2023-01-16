import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

function ToDoList({todo, setTodo}) {
  const[edit, setEdit] = useState(null)
  const[value, setValue] = useState('')

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if(item.id === id) {
        item.status = !item.status
      }
      return item;
    })
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  } 
  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
       if(item.id === id) {
        item.title = value
       }
       return item
    }) 
    setTodo(newTodo)
    setEdit(null);
  }
  return (
    <div className='container'>
      {
        todo.map(item => (
          <div key={item.id} className='listItem'>
            {
              edit === item.id ? 
                <div>
                  <input value={value} onChange={(e) => setValue(e.target.value)} />
                </div> :
                <div>{item.title}</div>
            }
            {
              edit === item.id ? 
                <div>
                  <button onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></button>
                </div> :
                <div>
                    <button onClick={() => statusTodo(item.id)}>Прийняти</button>
                    <button onClick={() => editTodo(item.id, item.title)}>Редагувати</button>
                    <button onClick={() => deleteTodo(item.id)}>Видалити</button>
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default ToDoList