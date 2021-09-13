import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import BarcodeScreen from './screens/BarcodeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Screen" component={LoginScreen}/>
        <Stack.Screen name="Barcode Screen" component={BarcodeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}