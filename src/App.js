import React, {useState} from 'react';
import './App.css';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import ToDoList from './Todolist/ToDoList';


function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Do 100 JavaScript project',
      status: true
    },
    {
      id: 2,
      title: 'Learn NodeJs',
      status: true
    },
    {
      id: 3,
      title: 'Learn React',
      status: true
    },
    {
      id: 4,
      title: 'Learn GraphQL',
      status: true
    },
  ])
  return (
    <div className='container'>
        <Header />
        <div className='wrapper'>
          <AddTodo todo={todo} setTodo={setTodo}  />
          <ToDoList todo={todo} setTodo={setTodo} />
        </div>
    </div>
  );
}

export default App;
