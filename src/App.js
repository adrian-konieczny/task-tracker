import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food shopping',
      day: 'Feb 5',
      reminder: true
    },
    {
      id: 2,
      text: 'Food shipping',
      day: 'Feb 5',
      reminder: true
    }
  ]);
  const[showAddTask, setShowAddTask] = useState(false);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>{
      return task.id !== id; 
    }))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>
      task.id === id ? {...task, reminder: !task.reminder }: task
    ))
  }
  const addTask = (task) => {
    const id=Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className='container'>
      <Header onAdd = {()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd ={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : ('No Tasks to show')}
      
    </div>
  )
}

export default App;
