import Task from './Task'
import {FaTimes} from 'react-icons/fa';
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
        {tasks.map((task)=> {
          return <Task key={task.id} task = {task} onDelete = {onDelete} onToggle={onToggle}/>
        })}
    </div>
  )
}

export default Tasks