import StyledText from "@/components/StyledText"
import { COLORS } from "@/constants/ui"
import React from "react"
import { StyleSheet, View } from "react-native"

type TodoItemProps = {
    title: string,
    isCompleted: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
    return (
        <View style={styles.container}>
            <StyledText
                style={[{
                    textDecoration: isCompleted ? 'line-through' : 'none'
                }]}
            >
                {title}
            </StyledText>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 10,
        backgroundColor: COLORS.SECONDARY_BACKGROUND
    }
})