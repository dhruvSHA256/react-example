import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {

    const [tasks, setTasks] = useState([
        { id: 1, name: "Doctor", remainder: false },
        { id: 2, name: "Mechanic", remainder: false },
    ]);

    const [showAddTask, setShowAddTask] = useState(false);

    const deleteTask = (id) => {
        console.log(`Deleted ${id}`)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        console.log(tasks)
        setTasks([...tasks, { ...task, id: id }]);
    }


    const toggleRemainder = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id ? { ...task, remainder: !task.remainder } : task;
            }
            ))
    }

    return (
        <>
            <div className='container'>
                <Header onAdd={() => { setShowAddTask(!showAddTask) }} />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemainder} onDelete={deleteTask} /> : "No Tasks Left"}
            </div>
        </>
    )
};

export default App
