import { Todo } from "@/types/todo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

const defaultTodos: Todo[] = []

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(defaultTodos)
    const [isLoaded, setIsLoaded] = useState(false)

    const completedTodos = todos.filter(todo => todo.isCompleted)

    const getTodos = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('todos')

            if (jsonValue !== null) {
                const parsedTodos: Todo[] = JSON.parse(jsonValue)
                setTodos(Array.isArray(parsedTodos) ? parsedTodos : defaultTodos)
            } else {
                setTodos(defaultTodos)
            }
        } catch (e) {
            console.log(e)
            setTodos(defaultTodos)
        } finally {
            setIsLoaded(true)
        }
    }

    const saveTodos = async (todos: Todo[]) => {
        try {
            const jsonValue = JSON.stringify(todos);
            await AsyncStorage.setItem('todos', jsonValue);
        } catch (e) {
            console.log(e)
        }
    };

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

    useEffect(() => {
        if (isLoaded) {
            saveTodos(todos)
        }
    }, [todos])

    useEffect(() => {
        getTodos()
    }, [])

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