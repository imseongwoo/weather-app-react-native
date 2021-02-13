import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';



export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp, temp_min, temp_max, humidity },
        weather: [details],
        name

    } = currentWeather
    const { icon, description,main } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    let tem = parseInt(temp)
    let dec = tem > 25 ? styles.textHot : styles.textCold

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#2BC0E4', '#EAECC6']}
            style={styles.WeatherInfo}
        >
            {/* <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <View style={styles.infodesign}>
                <Text>현재온도: {temp}</Text>
                <Text>최대온도: {temp_max}</Text>
            </View>
            <View style={styles.infodesign}>
                <Text>최저온도: {temp_min}</Text>
                <Text>습도: {humidity}</Text>
            </View> */}
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={dec}>{temp}°</Text>
            <Text style={styles.textSecondary}>{main}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center"
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textHot:{
        fontSize:40,
        color: 'red'
    },
    textCold:{
        fontSize:40,
        color:'black'
    },
    textSecondary:{
        fontSize:20,
        marginTop:10,
        fontWeight: '500'
    }

})