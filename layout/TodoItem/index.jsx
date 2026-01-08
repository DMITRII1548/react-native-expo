import StyledButton from "@/components/StyledButton"
import StyledCheckbox from "@/components/StyledCheckbox"
import StyledText from "@/components/StyledText"
import { COLORS } from "@/constants/ui"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import EditTodoModal from "../Modals/EditTodoModal"

type TodoItemProps = {
    id: number,
    title: string,
    isCompleted: boolean,
    onPressDeleteTodo: (id: Todo["id"]) => void,
    onCheckTodo: (id: Todo["id"]) => void,
    onPressUpdateTitleTodo: (id: Todo["id"], title: Todo["title"]) => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted, onPressDeleteTodo, onCheckTodo, onPressUpdateTitleTodo }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    
    return (
        <View style={styles.container}>
            <View style={styles.checkTitleContainer}>
                <StyledCheckbox 
                    checked={isCompleted}
                    onCheck={() => onCheckTodo(id)}
                />
                <StyledText
                    style={[{
                        textDecoration: isCompleted ? 'line-through' : 'none'
                    }]}
                >
                    {title}
                </StyledText>
            </View>

            <View style={styles.controlsContainer}>
                <StyledButton 
                    icon="pencil"
                    size="small"
                    onPress={() => setIsEditModalOpen(true)}
                />
                <EditTodoModal
                    title={title}
                    isOpen={isEditModalOpen}
                    onUpdate={(title) => onPressUpdateTitleTodo(id, title)}
                    onClose={() => setIsEditModalOpen(false)}
                 />
                <StyledButton 
                    icon="trash"
                    size="small"
                    variant="danger"
                    onPress={() => { onPressDeleteTodo(id) }}
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
    },

    checkTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
})