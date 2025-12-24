import { COLORS } from "@/constants/ui"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

type StyledCheckboxProps = TouchableOpacityProps & {
    checked: boolean
    onCheck: () => void
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ checked, onCheck, ...props }) => {
    return (
        <TouchableOpacity
            onPress={() => onCheck()}
            { ...props }
        >
            <Ionicons 
                name={checked ? 'checkmark-circle' : 'ellipse-outline'} 
                size={24} 
                color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
            />
        </TouchableOpacity>
    )
}

export default StyledCheckbox