import StyledButton from "@/components/StyledButton"
import StyledModal from "@/components/StyledModal"
import StyledText from "@/components/StyledText"
import StyledTextInput from "@/components/StyledTextInput"
import { COLORS } from "@/constants/ui"
import { Todo } from "@/types/todo"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

type EditTodoModalProps = {
    isOpen: boolean,
    onClose: () => void,
    onUpdate: (title: Todo["title"]) => void,
    title: Todo["title"]
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, onClose, onUpdate, title }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (updatedTitle && isError) {
            setIsError(false)
        }
    }, [updatedTitle])

    useEffect(() => {
        setUpdatedTitle(title)
    }, [isOpen])

    const onPressSave = () => {
        if (updatedTitle === "") {
            setIsError(true)
            return
        }

        onUpdate(updatedTitle)
        onClose()
    }

    return (
        <StyledModal 
            isOpen={isOpen}
            onClose={onClose}
        >
            <View style={styles.modalContentContainer}>
                <StyledText variant="title">Edit todo</StyledText>
                <View style={styles.inputContainer}>
                    <StyledTextInput
                        value={updatedTitle}
                        onChangeText={setUpdatedTitle}
                        isError={isError}
                        placeholder="Edit todo..."
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <StyledButton
                        label="Cancel"
                        variant="danger"
                        onPress={onClose}
                    />
                    <StyledButton
                        label="Save"
                        onPress={onPressSave}
                    />
                </View>
            </View>
        </StyledModal>
    )
}

export default EditTodoModal

const styles = StyleSheet.create({
    modalContentContainer: {
        gap: 20,
    },
    inputContainer: {
        minHeight: 60
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 15,
    }
})