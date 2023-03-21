import { useState } from 'react'
import './Task.css'
import TaskUpdate from './TaskUpdate'
import { FaMarker, FaTrash } from "react-icons/fa";

function Button(props) {
  return (
      <button 
        style={{backgroundColor: props.color, fontSize: '17px'}}
        onClick={props.handleButtonClick}
      >
        {props.icon}
      </button>
  )
}

export default function Task(props) {

  const [activeUpdate, setActiveUpdate] = useState(false)

  const [value, setValue] = useState(props.task)

  const handleChangeValueUpdate = (e) => {
      setValue(e.target.value)
  }

  const handleChangeValue = () => {
    let dados = [...props.taskList]
    dados[props.index].completed = !dados[props.index].completed
    props.setTaskList(dados)
  }

  const handleButtonDelete = () => {
    let dados = [...props.taskList]
    dados.splice(props.index, 1)
    props.setTaskList(dados)
  }

  const handleButtonUpdate = () => {
    setActiveUpdate(!activeUpdate)
    setValue(props.task)
  }

  const handleUpdate = () => {
    let dados = [...props.taskList]
    dados[props.index].task = value
    props.setTaskList(dados)
    setActiveUpdate(false)
  }

  return (
    <div>
      <div className="task-content">
          <label htmlFor={props.id}>
              <input 
                checked={props.completed ? true : false} 
                onChange={handleChangeValue} 
                type="checkbox" id={props.id} 
              />
              <p>{props.task}</p>
          </label>
          <div className="buttons">
              <Button 
                icon={<FaMarker />} color='#c407b4'
                handleButtonClick={handleButtonUpdate}
              />    
              <Button 
                icon={<FaTrash />} color='#ff0000'
                handleButtonClick={handleButtonDelete}
              />   
          </div>
      </div>
      {activeUpdate &&
        <TaskUpdate 
          value={value}
          handleUpdate={handleUpdate}
          handleChangeValue={handleChangeValueUpdate}
        />
      }
    </div>
  )
}
