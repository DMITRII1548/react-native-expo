import { Todo } from "@/types/todo"
import { useState } from "react"

const defaultTodos: Todo[] = []

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(defaultTodos)

    const completedTodos = todos.filter(todo => todo.isCompleted)

    const addTodo = (title: Todo["title"]) => {
        setTodos([ ...todos, { id: Number(new Date()), title, isCompleted: false } ])
    }

    const onPressDeleteTodo = (id: Todo["id"]) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const onCheckTodo = (id: Todo["id"]) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        }))
    }

    const onPressUpdateTitleTodo = (id: Todo["id"], title: Todo["title"]) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }

    return {
        addTodo,
        onPressDeleteTodo,
        onCheckTodo,
        onPressUpdateTitleTodo,
        completedTodos,
        todos
    }
}

export default useTodo