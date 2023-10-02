import { View, StyleSheet, Platform, Button } from 'react-native'

import LoginForm from '../components/LoginForm'
import CustomButton from '../components/CustomButton'

const LoginScreen = ({ navigation }) => {

  return(
    <View
      style={styles.container}
    >
      <LoginForm
        navigate={navigation.navigate}
      />
      <CustomButton
        children={'Go to Register'}
        onAction={() => navigation.navigate('Register')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default LoginScreen
