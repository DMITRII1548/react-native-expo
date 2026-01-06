import StyledButton from "@/components/StyledButton"
import StyledTextInput from "@/components/StyledTextInput"
import { Todo } from "@/types/todo"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

type TodoCreatorProps = {
    onAddTodo: (title: Todo["title"]) => void
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
    const [text, setText] = useState("")
    const [isInputError, setIsInputError] = useState(false)

    const onPressAdd = () => {
        if (text.length < 1) {
            setIsInputError(true)

            return 
        }
        onAddTodo(text)
        setText("")
    }

    useEffect(() => {
        if (text.length >= 1) {
            setIsInputError(false)
        }
    }, [text])

    return (
        <View
            style={styles.container}
        >
            <StyledTextInput
                placeholder="Add a task"
                value={text}
                onChangeText={t => setText(t)}
                isError={isInputError}
            />
            <StyledButton
                disabled={isInputError}
                label="+"
                size="large"
                onPress={() => {onPressAdd()}}
            />
        </View>
    )
}

export default TodoCreator

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        marginVertical: 20,
        marginHorizontal: 10,
    }
})