import StyledText from "@/components/StyledText"
import React from "react"

type TodoItemProps = {
    title: string,
    isCompleted: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
    return <StyledText>{title}</StyledText>
}

export default TodoItem

const styles = {
    
}