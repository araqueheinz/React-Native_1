// Import the React Library
import React from 'react';

// Import Reactive Native View & Text Components
import { View, Text, StyleSheet } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          This is my custom application
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center" 
  },
  textStyle: {
    fontSize: 22,
    color: "blue"
  }
});

