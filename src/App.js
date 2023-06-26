import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 5:30pm',
    reminder: false,
},
{
    id: 3,
    text: 'Grocery Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1001)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>

  );
}



export default App;
