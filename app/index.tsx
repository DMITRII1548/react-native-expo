import { COLORS } from "@/constants/ui";
import Header from "@/layout/header/Index";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/todo";
import { useState } from "react";
import TodoList from "@/layout/TodoList";
import TodoCreator from "@/layout/TodoCreator";
import useTodo from "@/hooks/useTodo";



export default function Index() {
  const { addTodo, onPressDeleteTodo, onCheckTodo, onPressUpdateTitleTodo, completedTodos, todos } = useTodo()

  return (
    <View
      style={styles.container}
    >
      <StatusBar 
        barStyle={"dark-content"}
      />
      <Header 
        completedTodos={completedTodos.length}
        totalTodos={todos.length}
      />
      <TodoCreator
        onAddTodo={t => { addTodo(t) }}
      />
      <TodoList 
        todos={todos} 
        onPressDeleteTodo={ onPressDeleteTodo }
        onCheckTodo={ onCheckTodo }
        onPressUpdateTitleTodo={ onPressUpdateTitleTodo }
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