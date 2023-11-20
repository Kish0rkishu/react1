import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const ToDoList = () => {

  const [todo, setTodo] = useState('')
  const [todoArray, setTodoArray] = useState([])

  const addTodo = function () {
    const newTodoObj = {
      title: todo,
      completed: false
    }
    axios.post('  http://localhost:3001/posts', newTodoObj)
      .then(() => {
        alert('data posted')
      })
      .catch(() => {
        alert('not posted')
      })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </Box>
        <Button variant="outlined" onClick={addTodo}>Add Todo</Button>

      </div>

    </div>
  )
}

export default ToDoList