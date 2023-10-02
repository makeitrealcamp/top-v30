import { Pressable, Text } from "react-native"
import { StyleSheet } from "react-native"

const CustomButton = ({ onAction, children }) => {
  return (
    <>
      <Pressable 
        onPress={onAction}
        style={buttonStyles.button}
        >
        <Text style={buttonStyles.text}> { children } </Text>
      </Pressable>
    </>
  )
}

export default CustomButton

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    color: 'white'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})