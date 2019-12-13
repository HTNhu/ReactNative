import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import { RouterStoreContext } from './stores/RouterStore';
import { WorkoutHistory } from './modules/WorkoutHistory';
import { CurrentWorkout } from './modules/CurrentWorkout';

const Routes = observer(() => {
    const routerStore = useContext(RouterStoreContext)
    // const [text, setText] = useState('Click button');
    return (
        routerStore.path === 'WorkoutHistory' ? <WorkoutHistory></WorkoutHistory> : <CurrentWorkout></CurrentWorkout>
    );
  })
  
  export default Routes;