import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoaderComponent = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="small" color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#3DD598'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default LoaderComponent;