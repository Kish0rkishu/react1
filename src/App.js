import React from 'react'
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import TodoList from './components/ToDoList.js'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div>
           <Navigation></Navigation>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App