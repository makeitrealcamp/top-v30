import { useState } from 'react'
import {  Text, View, Image, StyleSheet } from 'react-native'

import CustomButton from '../components/CustomButton'

export const FirstPage = () => {
  const [topVersion, setTopVersion] = useState(0);

  const handleAdd = () => {
    setTopVersion(topVersion + 5);
  }

  return (
    <View style={styles.app_container}>
      <Text style= {styles.app_title} >Mi primera App !</Text>
      <Text style={styles.app_subtitle} > Top versión: {topVersion} </Text>
      <CustomButton 
        onAction={handleAdd}
        topVersion={topVersion}
        children={'Más'}
      />
      <Image
        source={require('./assets/developers.webp')}
      />
    </View>
  )
}


export default FirstPage

export const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
  },
  app_title: {
    color: 'black',
    fontSize: '50px'
  },
  app_subtitle: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'black'
  }
})