import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction } from './actions/TodoActions' 
import './App.css'

const App = () => {
  const [todo, setTodo] = useState()

  const dispatch = useDispatch()
  const Todo = useSelector(state => state.Todo)
  const { todos } = Todo

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form
          onSubmit={handleSubmit}
        >
          <input
            placeholder='Enter a Todo'
            onChange={e => setTodo(e.target.value)}
          />
          <button
            type='submit'
            className='submit'
          >
            Go
          </button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map(todo => (
              <li
                className='singleTodo'
                key={todo.id}
              >
                <span className='todoText'>{todo.todo}</span>
                <button
                  className='delete'
                >
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  )
}

export default App
