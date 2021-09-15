import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { auth } from './Firebase';

const DashboardScreen = ( {navigation} ) => {
    
    toBarcodeScreen = () => {
        navigation.navigate('Barcode Screen')
    }

    userLogOut = () => {
        auth.signOut(),
        navigation.navigate('Login Screen')
    }

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
                onPress={() => alert("Still working on Setting Up User Screen")}
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