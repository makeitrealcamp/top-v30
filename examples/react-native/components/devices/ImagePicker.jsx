import { useState } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import CustomButton from '../CustomButton'

const PickerScreen = () => {
  const [image, setImage] = useState(null)

  const pickImageHandler = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result)
      setImage(result.assets[0].uri)
    }
  }

  const shareImageHandler = async () => {
    const isAvaliable = await Sharing.isAvailableAsync()

    if(!isAvaliable) {
      alert('Sharing is not avaliable on your platform')
      return
    }

    await Sharing.shareAsync(image)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Picker</Text>
      <CustomButton
        children='Pick an image from camera roll'
        onAction={pickImageHandler}
      />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <CustomButton
        children='Share this image'
        onAction={shareImageHandler}
      />
    </View>
  )
}

export default PickerScreen

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