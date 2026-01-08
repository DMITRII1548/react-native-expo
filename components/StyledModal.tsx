import { COLORS } from "@/constants/ui"
import React, { Children } from "react"
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

type StyledModalProps = {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

const StyledModal: React.FC<StyledModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <Modal 
            visible={isOpen}
            onRequestClose={onClose}
            animationType="fade"
            transparent={true}
        >
            <TouchableWithoutFeedback
                onPress={onClose}
            >
                <View
                    style={styles.modalBackgroundContainer}
                >
                    <TouchableWithoutFeedback
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View
                            style={styles.contentContainer}
                        >
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default StyledModal

const styles = StyleSheet.create({
    modalBackgroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    contentContainer: {
        padding: 20,
        borderRadius: 10,
        width: "90%",
        backgroundColor: COLORS.PRIMARY_BACKGROUND
    }
})