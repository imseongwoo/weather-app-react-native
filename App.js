import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo'

const WEATHER_API_KEY = "57d0309882af17959f1c27a2c26991c2"


export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');
  useEffect(() => {
    load()
  }, [])
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('위치에 대한 접근이 필요합니다!')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
      
      const response = await fetch(weatherUrl)
      
      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
        console.log(result)
        
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if (currentWeather) {
    
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <WeatherInfo currentWeather={currentWeather}/>
        </View>

        
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  main:{
    justifyContent:'center',
    flex:1
  }
});

