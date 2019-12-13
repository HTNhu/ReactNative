import React, { Component, useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';
import { observer } from 'mobx-react-lite';
import { autorun } from 'mobx';
interface Props{

}
export const WorkoutHistory: React.FC<Props> = observer(() => {
    const routerStore = useContext(RouterStoreContext)
    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is Workout History page</Text>
            <Button title='switch' onPress= {() => routerStore.path = 'CurrentWorkout' }></Button>
        </View>
    )
})
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