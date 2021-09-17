//App.js 

//Modules needed for App.js
import React from 'react';

//React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Source location of screens
import LoginScreen from './screens/LoginScreen';
import BarcodeScreen from './screens/BarcodeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';

//Create a stack used to navigate the app
const Stack = createStackNavigator();

//Export the function App()
export default function App() {
  return (
    //Navigation Container contains Stack Navigator
    //Stack Navigator contains each screen component (Login, Dashboard, Barcode, Profile)
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Screen" component={LoginScreen}/>
        <Stack.Screen name="Dashboard Screen" component={DashboardScreen}/>
        <Stack.Screen name="Barcode Screen" component={BarcodeScreen}/>
        <Stack.Screen name="Profile Screen" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}