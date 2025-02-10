import './App.css'
import { useState } from 'react'
import img from './img.svg'

function App() {

  const [task, setTask] = useState([]);
  const [value, setValue] = useState('');

  function addTask() {
    if (document.getElementById('task').value === '') {
      alert('Please enter a task');
      return;
    } else {
      const newTask = [...task, value];
      setTask(newTask);
      setValue('');
    }
  }

  function deleteTask() {
    if (confirmTask()) {
      document.getElementById('taskDone').remove();
    } else {
      alert('Please confirm the task before deleting it');
    }
    document.getElementById('checkTask').checked = false;
    document.getElementById('taskDone').style.textDecoration = 'none';
  }

  function confirmTask() {
    if (document.getElementById('checkTask').checked) {
      return true;
    } else if (!document.getElementById('checkTask').checked) {
      return false;
    }
  }

  function markTask() {
    if (document.getElementById('checkTask').checked) {
      document.getElementById('taskDone').style.textDecoration = 'line-through';
    } else if (!document.getElementById('checkTask').checked) {
      document.getElementById('taskDone').style.textDecoration = 'none';
    }
  }

  return (
    <>
      <h1>Task List</h1>
      <div className='add-task'>
        <input
          type="text"
          id="task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div id='taskList' className='task-list'>
        <ul>
          {task.map((task, index) => (
            <li id='taskDone' key={index}>
              {task}
              <div>
                <input type="checkbox" id='checkTask' onChange={markTask} />
                <button id='deleteTask' onClick={deleteTask}>
                  <img src={img} alt='trash' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
