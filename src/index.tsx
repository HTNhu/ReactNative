
import { AppRegistry } from 'react-native'

import React from 'react';
import Routes from './Routes';
import { WorkoutCard } from './ui/WorkoutCard';

const App = () => { 
  return (
      <WorkoutCard sets={['5', '5', 'x', '5', 'x']} exercise='Squat' repsAndWeight='5x5 300'></WorkoutCard>
    //   <Routes></Routes>
  );
}

export default App;


AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('root')
})
// ReactDOM.render(<App />, document.getElementById('root'));
