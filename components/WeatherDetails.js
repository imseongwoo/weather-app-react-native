import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';


export default function WeatherDetails({currentWeather}) {
    const {
        main:{humidity,temp,temp_max,temp_min}
    } = currentWeather
    let tem = parseInt(temp)
    let tempimage = tem > 25 ? <FontAwesome5 name="temperature-high" size={24} color="black" /> : <FontAwesome5 name="temperature-low" size={24} color="black" />
    let humidimage = parseInt(humidity) > 60 ?<Ionicons name="water" size={24} color="black" />:<Ionicons name="water-outline" size={24} color="black" />
    return (
        <LinearGradient colors={['#EAECC6', '#EAECC6']}>
            <View style={styles.weatherDetails}>
                <View style={styles.weatherDetailsRow}>
                    <View style={{...styles.weatherDetailsBox,borderRightWidth: 1,borderRightColor:'white'}}>
                        <View style={styles.weatherDetailsRow}> 
                            {humidimage}
                            <Text style={styles.textSecondary}>습도 : {humidity}%</Text>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}> 
                            <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" />
                            <Text style={styles.textSecondary}>온도 : {temp}°</Text>
                        </View> 
                    </View>
                </View>
                <View style={{...styles.weatherDetailsRow,borderTopWidth:1,borderTopColor:'white'}}>
                    <View style={{...styles.weatherDetailsBox,borderRightWidth: 1,borderRightColor:'white'}}>
                        <View style={styles.weatherDetailsRow}> 
                            {tempimage}
                            <Text style={styles.textSecondary}>최대온도 : {temp_max}°</Text>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}> 
                            {tempimage}
                            <Text style={styles.textSecondary}>최저온도 : {temp_min}°</Text>
                        </View> 
                    </View>
                </View>
            </View>
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 10,
        margin: 15,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
        
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: "black",
        fontWeight: '700',
        margin: 7,
    },
})