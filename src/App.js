import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions' 
import './App.css'

const App = () => {
  const [todo, setTodo] = useState()

  const dispatch = useDispatch()
  const Todo = useSelector(state => state.Todo)
  const { todos } = Todo

  const clearField = () => {
    setTodo('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
    clearField()
  }

  const removeHandler = t => {
    dispatch(RemoveTodoAction(t))
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
            value={todo}
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
            todos && todos.map(t => (
              <li
                className='singleTodo'
                key={t.id}
              >
                <span className='todoText'>{t.todo}</span>
                <button
                  className='delete'
                  onClick={() => removeHandler(t)}
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
