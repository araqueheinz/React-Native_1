// Import the React Library
import React, { Component } from 'react';

// Import Reactive Native View & Text Components
import { Text, StyleSheet } from 'react-native';


export default class NameText extends Component {
  render() {
    return (
      <Text style={styles.textStyle}>
        {this.props.name}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: "black",
    backgroundColor: "yellow",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 15,
  }
});

