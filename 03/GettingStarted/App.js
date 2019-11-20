// Import the React Library
import React from 'react';

// Import Reactive Native View & Text Components
import { View, Text, StyleSheet } from 'react-native';

// Import our NameText component
import NameText from './src/components/NameText';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText name="Heinz Araque"/>
        <NameText name="Fonda Yeh" />
        <NameText name="Oscar Araque"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center" 
  },
});

