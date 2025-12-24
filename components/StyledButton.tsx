import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import StyledText from "./StyledText"
import React from "react"
import { COLORS } from "@/constants/ui"
import { Ionicons } from "@expo/vector-icons"

type StyledButtonProps = TouchableOpacityProps & {
    label?: string
    icon?: React.ComponentProps<typeof Ionicons>["name"],
    size?: "default" | "large" | "small",
    variant?: "primary" | "danger"
}

const StyledButton: React.FC<StyledButtonProps> = ({ 
    label, 
    icon, 
    size = "default", 
    variant = "primary",
    ...props 
}) => {
    return (
        <TouchableOpacity 
            style={[
                styles.base, 
                // Sizes
                size === "small" ? styles.small : null,
                // Variants
                variant === "danger" ? styles.danger : null,
            ]}
            {...props}
        >
            {label && <StyledText>{label}</StyledText>}
            {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
    },
    // Sizes
    small: {
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    // Variants
    danger: {
        backgroundColor: COLORS.PRIMARY_DANGER
    }
})

export default StyledButton