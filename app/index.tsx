import { COLORS } from "@/constants/ui";
import Header from "@/layout/header/Index";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar 
        barStyle={"dark-content"}/>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
})