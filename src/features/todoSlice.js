import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'tasks',
    initialState: [
        {id: 1, title: "Walk the dog", completed: false},
        {id: 2, title: "Go outside", completed: false},
        {id: 3, title: "Finish homework", completed: true}
    ],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTask)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (task) => task.id === action.payload.id
                )
                state[index].completed = action.payload.completed
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id)
        }
    }
});

export const { addTask, toggleComplete, deleteTask } = todoSlice.actions
export default todoSlice.reducer