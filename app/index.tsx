import { COLORS } from "@/constants/ui";
import Header from "@/layout/header/Index";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/todo";
import { useState } from "react";
import TodoList from "@/layout/TodoList";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: 'Make coffee',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Start working',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Finish project',
    isCompleted: false
  },
]

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos)

  const completedTodos = todos.filter(todo => todo.isCompleted)

  return (
    <View
      style={styles.container}
    >
      <StatusBar 
        barStyle={"dark-content"}/>
      <Header 
        completedTodos={completedTodos.length}
        totalTodos={todos.length}
      />
      <TodoList 
        todos={todos} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
})