import StyledButton from "@/components/StyledButton"
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
            <View style={styles.controlsContainer}>
                <StyledButton 
                    icon="pencil"
                    size="small"
                />
                <StyledButton 
                    icon="trash"
                    size="small"
                    variant="danger"
                />
            </View>
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
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    },
    
    controlsContainer: {
        flexDirection: "row",
        gap: 5,
    }
})