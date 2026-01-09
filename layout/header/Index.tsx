import StyledText from "@/components/StyledText"
import { COLORS } from "@/constants/ui"
import { getFullFormatedDate } from "@/helpers/date"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

type HeaderProps = {
    totalTodos: number,
    completedTodos: number
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
    const formattedDateNow = getFullFormatedDate(new Date())
    return (
        <View style={styles.container}>
            <View style={styles.headerMainContent}>
                <StyledText>TO DO LIST</StyledText>
                <StyledText>{ formattedDateNow }</StyledText>
            </View>
            <StyledText>Completed: {completedTodos} / {totalTodos}</StyledText>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: COLORS.SECONDARY_BACKGROUND
    },
    headerMainContent: {
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        marginBottom: 20
    }
})