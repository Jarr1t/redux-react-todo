import React from 'react'
import { useSelector} from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks)

    return (
    <ul>
        {tasks.map(task => {
            return <TaskItem key ={task.id} id={task.id} title={task.title} completed={task.completed}/>
        })}
    </ul>
    )
}

export default TaskList