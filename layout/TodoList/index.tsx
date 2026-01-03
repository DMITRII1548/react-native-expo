import { Todo } from "@/types/todo"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import TodoItem from "@/layout/TodoItem"

type TodoListProps = {
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <View
            style={styles.container}
        >
            <FlatList 
                data={todos} 
                keyExtractor={(todo) => todo.id.toString()} 
                renderItem={({ item }) => <TodoItem title={item.title} isCompleted={item.isCompleted} />}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})