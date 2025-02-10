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

  function deleteTask(index) {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  }

  function markTask(index) {
    const taskElement = document.querySelectorAll('li')[index];
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      taskElement.style.textDecoration = 'line-through';
    } else {
      taskElement.style.textDecoration = 'none';
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
            <li key={index}>
              {task}
              <div>
                <input type="checkbox" onChange={() => markTask(index)} />
                <button onClick={() => deleteTask(index)}>
                  <img src={img} alt='trash' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default App
