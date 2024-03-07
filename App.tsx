import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App =() => {
  return{
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
  name="SplashScreen" component={SplashScreen} options{}/>
  </Stack.Navigator>
  <SplashScreen/>
  </NavigationContainer>
  };
};
export default App;
