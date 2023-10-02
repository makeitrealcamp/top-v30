import { StyleSheet, View, Text } from "react-native"

const ResgisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resgister</Text>
    </View>
  )
}

export default ResgisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  }
})