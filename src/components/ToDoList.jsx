import React, { useState } from 'react'
import { List, ListItem, Checkbox, ListItemButton, IconButton, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';

const ToDoList = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
    setTimeout(() => {
      document.getElementById('todolist').scrollTop = document.getElementById('todolist').scrollHeight
      document.getElementById('todolist').scrollIntoView({ behavior: 'smooth' })
      document.getElementById('outlined-basic').focus()
    }
      , 100);
  };
  const handleClose = () => setOpen(false);

  let toDoList = [
    { id: 1, text: '1st' },
    { id: 2, text: '2nd' },
    { id: 3, text: '3rd' },
    { id: 4, text: '4th' },
  ]

  const [toDo, setToDo] = useState(toDoList)

  const deleteTask = (id) => {
    const newToDo = toDo.filter((task) => task.id !== id)
    setToDo(newToDo)
  }
  const addTask = (text) => {
    const newTask = {
      id: toDo.length + 1,
      text: text
    }
    setToDo([...toDo, newTask])
  }

  return (
    <>
      <div className="min-w-70">
        <h1 className="text-2xl pt-2"><TaskAltIcon fontSize="large" className="m-2" />To Do list</h1>
        <List>
          <div className="max-h-51 overflow-y-scroll" id="todolist">
            {toDo.map((task) => {
              return (
                <ListItem disableGutters disablePadding key={task.id}>
                  <ListItemButton >
                    <h1><Checkbox />{task.text}</h1>
                  </ListItemButton>
                  <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
                </ListItem>
              )
            })}
            <div className={`${open ? "block" : "hidden"} px-2`}>
              <ListItem disableGutters>
                <TextField sx={{ marginX: 'auto' }} id="outlined-basic" label="Add Task" variant="outlined" onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTask(e.target.value)
                    e.target.value = ''
                    handleClose()
                  }
                }} />
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
            </div>
          </div>
          <ListItem disableGutters>
            <ListItemButton onClick={handleOpen}>
              <h1 className="flex"><AddTaskIcon fontSize="medium" className="mx-2" />Add Task</h1>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  )
}

export default ToDoList