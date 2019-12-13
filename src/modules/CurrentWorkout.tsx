import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
interface Props{

}
export const CurrentWorkout: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is Current Workout page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
      fontSize: 18
    },
    container:{
      margin: 'auto',
      width: 250,
      height: 250,
      display: "flex",
      alignItems: "center"
    }
  
  })