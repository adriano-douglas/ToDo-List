import './TaskUpdate.css'

export default function TaskUpdate(props) {
  return (
    <div className="task-update-container">
        <input value={props.value} onChange={props.handleChangeValue} type="text" />
        <button onClick={props.handleUpdate} >Atualizar</button>    
    </div>
  )
}
