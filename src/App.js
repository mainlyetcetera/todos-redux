import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form>
          <input
            placeholder='Enter a Todo'
          />
          <button
            type='submit'
            className='submit'
          >
            Go
          </button>
        </form>
        <ul className='allTodos'>
          <li
            className='singleTodo'
          >
            <span className='todoText'>Some text here</span>
            <button
              className='delete'
            >
              Delete
            </button>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default App
