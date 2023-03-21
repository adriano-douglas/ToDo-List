import './TaskInput.css'
import React, { useState } from 'react'

export default function TaskInput(props) {

const [value, setValue] = useState('')

const handleChangeValue = (e) => {
  setValue(e.target.value)
}

const handleButtonClickAdd = () => {
  let newTask = {
    id: Math.random(),
    task: value,
    completed: false
  }
  props.setTaskList([...props.taskList, newTask])
  setValue('')
}

  return (
    <div className="container-task-input">
        <input type="text" value={value} onChange={handleChangeValue} placeholder='Digite a sua nova tarefa' />    
        <button onClick={handleButtonClickAdd}>{props.text}</button>
    </div>
  )
}
