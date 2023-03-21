import { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

function App() {

const [taskList, setTaskList] = useState([])

console.log(taskList)

  return (
    <div className="App">
      <div className="container">
        <h1>Lista de tarefas</h1>
        <TaskInput 
          taskList={taskList} 
          setTaskList={setTaskList} 
          text= {'Adicionar'}
        />
        <div className="list-container">
          {
            taskList.map((value, index) => (
              <Task 
                key={index} 
                index={index}
                id={value.id} 
                task={value.task} 
                completed={value.completed}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
