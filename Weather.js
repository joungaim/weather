import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    "Thunderstorm": {
        iconName: "weather-lightning",
        gradient: ["#4da0b0", "#d39d38"]
    },
    // 이슬비
    "Drizzle": {
        iconName: "weather-rainy",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Rain": {
        iconName: "weather-pouring",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Snow": {
        iconName: "weather-snowy",
        gradient: ["#4da0b0", "#d39d38"]
    },
    // 대기
    "Atmosphere": {
        iconName: "weather-partly-cloudy", //저녁 용 아이콘 : weather-night-partly-cloudy
        gradient: ["#89f7fe", "#66a6ff"]
    },
    "Clear": {
        iconName: "weather-sunny", // 저녁용 아이콘 : weather-night
        gradient: ["#ff7300", "#fef253"]
    },
    "Clouds": {
        iconName: "cloud-outline",
        gradient: ["#d7d2cc", "#304352"]
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"]
    },
    // 안개
    "Haze": {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    "Mist": {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Smoke": {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "fog": {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Dust": {
        iconName: "weather-windy",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Sand": {
        iconName: "weather-windy",
        gradient: ["#4da0b0", "#d39d38"]
    },
    // 돌풍
    "Squall": {
        iconName: "weather-windy",
        gradient: ["#4da0b0", "#d39d38"]
    },
    "Ash": {
        iconName: "weather-tornado",
        gradient: ["#4da0b0", "#d39d38"]
    },
    // 폭풍
    "Tornado": {
        iconName: "weather-tornado",
        gradient: ["#4da0b0", "#d39d38"]
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textcontainer }} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },

    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },

    textcontainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});