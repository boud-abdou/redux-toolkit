import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";
import './AddTodo.css'

function AddTodo() {
    
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
    
}

export default AddTodo;
