import { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native"
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { shareAsync } from 'expo-sharing';

import CustomButton from "../CustomButton";

const CameraScreen = () => {
  const cameraRef = useRef()
  const [type, setType] = useState(CameraType.back)
  const [photo, setPhoto] = useState()
  const [hasCameraPermission, setHasCameraPermission] = useState()
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState()

  useEffect(() => {
    ( async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      const mediaPermission = await MediaLibrary.requestPermissionsAsync()
      setHasCameraPermission(cameraPermission.status === 'granted')
      setHasMediaLibraryPermission(mediaPermission.status === 'granted')
    })()
  }, [])

  if(hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if(!hasCameraPermission) {
    return <Text>No access to camera</Text>
  }

  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: true,
    }

    const newPhoto = await cameraRef.current.takePictureAsync(options)
    setPhoto(newPhoto)
  }

  if(photo) {
    const sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined)
      })
    }

    const savePic = async () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined)
      })
    }

    return (
      <SafeAreaView style={styles.container}>
        {photo && <Image source={{ uri: photo.uri }} style={{ width: 200, height: 200 }} />}
        <CustomButton children='Share' onAction={sharePic} />
       {hasMediaLibraryPermission && <CustomButton children='Save' onAction={savePic} />}
       <CustomButton children='Discard' onAction={() => setPhoto(undefined)} />
      </SafeAreaView>
    )
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={type}>
      <View style={styles.buttonContainer} >
        <CustomButton
          children='Take Picture'
          onAction={takePic}
        />
        <CustomButton
          children='Flip Camera'
          onAction={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
        />
      </View>
    </Camera>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});