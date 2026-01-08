import StyledButton from "@/components/StyledButton"
import StyledModal from "@/components/StyledModal"
import StyledText from "@/components/StyledText"
import React from "react"
import { StyleSheet, View } from "react-native"

type DeleteTodoModalProps = {
    isOpen: boolean
    onClose: () => void,
    onDelete: () => void,
}

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({ isOpen, onClose, onDelete }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <View style={styles.modalContentContainer}>
                <StyledText variant="heading">Are you sure?</StyledText>
                <View style={styles.modalButtonsContainer}>
                    <StyledButton 
                        label="Cancel"
                        onPress={onClose}
                    />
                    <StyledButton 
                        label="Confirm"
                        variant="danger"
                        onPress={onDelete}
                    />
                </View>
            </View>
        </StyledModal>
    )
}

export default DeleteTodoModal

const styles = StyleSheet.create({
    modalContentContainer: {
        alignItems: "center",
        gap: 20
    },
    modalButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20
    }

})