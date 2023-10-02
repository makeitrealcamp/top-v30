import { StyleSheet, View, Text } from "react-native"

const ProfileScreen = ({ route }) => {
  const { email, password, terms } = route.params
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, ...styles.text_weight}}>Email:</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={{...styles.text, ...styles.text_weight}}>Password:</Text>
      <Text style={styles.text}>{password}</Text>
      <Text style={{...styles.text, ...styles.text_weight}}>Terms:</Text>
      <Text style={styles.text}>{terms ? 'true' : 'false'}</Text>
    </View>
  )
}

export default ProfileScreen

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
  },
  text_weight: {
    fontWeight: 'bold',
  }
})