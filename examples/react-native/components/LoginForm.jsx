import { useState } from 'react'
import { 
  Text, 
  View,
  TextInput,
  Switch,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native'

import CustomButton from './CustomButton'

const LoginForm = ({ navigate }) => {

  const [ data, setData ] = useState({
    email: '',
    password: '',
    terms: false
  })

  const handleChange = (input, value) => {
    setData({
      ...data,
      [input]: value
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const json = await response.json()

      // navigate('Profile', {
      //   email: data.email,
      //   password: data.password,
      //   terms: data.terms
      // })
      navigate('Landing')
    } catch(error) {
      alert(error)
    }
  }

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={styles.inner}
        >
            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.form_input}
              placeholder='Write your email'
              value={data.email}
              onChangeText={(text) => handleChange('email', text) }
              keyboardType='email-address'
              autoCapitalize='none'
              placeholderTextColor='#B2BBBE'
            />
            <Text style={styles.text}>Password:</Text>
            <TextInput
              style={styles.form_input}
              placeholder='Write your password'
              value={data.password}
              onChangeText={(text) => handleChange('password', text) }
              secureTextEntry={true}
              placeholderTextColor='#B2BBBE'
            />
            <Text style={styles.text}>Terms:</Text>
            <Switch
              value={data.terms}
              onValueChange={(value) => handleChange('terms', value)}
            />
            <CustomButton
              children='Login'
              onAction={handleSubmit}
            />
          </View>
      </KeyboardAvoidingView>
  )
}

export default LoginForm


const styles = StyleSheet.create({
  form_input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
  },
  container: {
    flex: 1,
    height: '400px',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  }
})