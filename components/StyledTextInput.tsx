import { COLORS } from "@/constants/ui"
import React from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type StyledTextInputProps = TextInputProps & {
    isError: boolean
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ isError, ...props }) => {
    return (
        <TextInput
            style={[styles.input, props.style, isError ? styles.error : null]}
            placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
            { ...props }
        />
    )
}

export default StyledTextInput

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        color: COLORS.PRIMARY_TEXT,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_BORDER
    },
    error: {
        borderColor: COLORS.PRIMARY_DANGER
    }
})