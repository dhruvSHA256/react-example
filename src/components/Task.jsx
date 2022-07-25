import { FaTimes } from "react-icons/fa"
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.remainder && 'reminder'}`} >
            <h3>
                {task.name}{' '} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
        </div>
    )
}

export default Task
