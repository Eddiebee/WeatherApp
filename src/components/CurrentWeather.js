import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

// density independent pixels

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 27 : 0,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
