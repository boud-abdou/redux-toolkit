import { createSlice, nanoid } from "@reduxjs/toolkit";
const localValue =() => {
  const saved = localStorage.getItem("todos");
  const initialValue = JSON.parse(saved);
  return initialValue;
}

const initialState = {
    todos: localValue()
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false, 
                edited: false,
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        handleComplete: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

        },
    }
}
)

export const { addTodo, deleteTodo, handleComplete} = todoSlice.actions

export default todoSlice.reducer