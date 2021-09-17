//DashboardScreen.js

//Modules needed for DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//Import auth field from Firebase.js
import { auth } from './Firebase';

//Dashboard Screen function 
const DashboardScreen = ( {navigation} ) => {

    //Function to take user to Profile Screen
    toProfileScreen = () => {
        navigation.navigate('Profile Screen')
    }
    
    //Function to take user to Barcode Screen
    toBarcodeScreen = () => {
        navigation.navigate('Barcode Screen')
    }

    //Function to log the user out of the app
    userLogOut = () => {
        auth.signOut(),
        navigation.navigate('Login Screen')
    }

    //Return will display Main Menu along with description of the app
    //Three buttons (Profile Screen navigator, Barcode Screen navigator, and Sign Out) are included
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Main Menu
            </Text>
            <Text style={styles.body}>
                FoodScan is an app that provides essential nutrition information to help keep track of your meals
            </Text>
            <Button 
                title = "Access Your Profile"
                onPress={() => toProfileScreen()}
            />
            <Button 
                title = "Barcode Scanner"
                onPress={() => toBarcodeScreen()}
            />
            <Button 
                title = "Sign Out"
                onPress={() => userLogOut()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 0,
      marginTop: -50
    },
    body: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: 60,
      marginBottom: 20
    }
})

export default DashboardScreen;