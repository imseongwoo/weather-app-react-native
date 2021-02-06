import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
export default function WeatherInfo({currentWeather}) {
    const {
         main: { temp,temp_min,temp_max },
         weather: [details]

} = currentWeather
    const {icon,description} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <LinearGradient
        // Background Linear Gradient
        colors={['#2BC0E4','#EAECC6']}
        style={styles.WeatherInfo}
        >
        {/* <View style={styles.WeatherInfo}> */}
            <Image style = {styles.weatherIcon} source = {{uri:iconUrl}}></Image>
            <Text>현재온도: {temp}</Text>
            
            <Text>최대온도: {temp_max}</Text>
            <Text>최저온도: {temp_min}</Text>
        {/* </View> */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    WeatherInfo:{
        alignItems:'center',
        flex:1,
        justifyContent:"center"
    },
    weatherIcon:{
        width:100,
        height:100,
        
        
    }
})