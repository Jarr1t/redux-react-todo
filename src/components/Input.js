import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todoSlice'

function Input() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault()
        dispatch(addTask({
            title: input,
        }))
        setInput('')
    }

    return (
        <form onSubmit={onSubmit} className="input">
            <input type="text" placeholder="Write Task Here" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="submit" >Add task!</button>
        </form>
    )
}

export default Input
