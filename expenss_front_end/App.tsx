import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';


import { StackNavigation } from './src/Navigation/Stack/StackNavigation';





function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}


export default App;
