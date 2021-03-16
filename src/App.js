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
      </header>
    </div>
  )
}

export default App
