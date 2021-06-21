import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTask } from '../features/todoSlice'

function TaskItem({id, title, completed}){
    const dispatch = useDispatch()
    const handleComplete = () => {
        dispatch(toggleComplete({id: id, completed: !completed}))
    }
    const handleDelete = () => {
        dispatch(deleteTask({id:id}))
    }
    return (
        <li>
            <span onClick={handleComplete} className={`task-${completed}`}>{title}</span>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TaskItem