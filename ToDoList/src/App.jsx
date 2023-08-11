import Form from './components/Form'
import List from './components/List'
import './App.css'


function App() {
  return (
    <div className='container-app'>
      <h1 className='title'>Welcome to your To-Do App</h1>
      <Form />
      <List />
    </div>
  )
}

export default App;