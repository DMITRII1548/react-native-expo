import { COLORS } from "@/constants/ui"
import { StyleSheet, Text, TextProps } from "react-native"

type StyledText = TextProps

const StyledText: React.FC<StyledTextProps> = ({ style, ...props }) => {
    return <Text style={[styles.base, style]} {...props}/>
}

export default StyledText

const styles = StyleSheet.create({
    base: {
        color: COLORS.PRIMARY_TEXT
    }
})