import { Todo } from "@/types/todo"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import TodoItem from "@/layout/TodoItem"

type TodoListProps = {
    todos: Todo[],
    onPressDeleteTodo: (id: Todo["id"]) => void,
    onCheckTodo: (id: Todo["id"]) => void,
    onPressUpdateTitleTodo: (id: Todo["id"], title: Todo["title"]) => void,
}

const TodoList: React.FC<TodoListProps> = ({todos, onPressDeleteTodo, onCheckTodo, onPressUpdateTitleTodo}) => {
    return (
        <View
            style={styles.container}
        >
            <FlatList 
                data={todos} 
                keyExtractor={(todo) => todo.id.toString()} 
                renderItem={({ item }) => 
                    <TodoItem 
                        id={item.id}
                        title={item.title} 
                        isCompleted={item.isCompleted} 
                        onDelete={ onPressDeleteTodo }
                        onCheckTodo={ onCheckTodo }
                        onPressUpdateTitleTodo={ onPressUpdateTitleTodo }
                    />
                }
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