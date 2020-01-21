
import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';


export default class FormItem extends React.Component {

    render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.values.name}</Text>
        <Text style={styles.title}>{this.props.values.breed}</Text>
        <Icon name='md-close-circle-outline'
          style={styles.closeButton} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    closeButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0
    }
  });