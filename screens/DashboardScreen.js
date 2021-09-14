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
                Welcome to the Dashboard Screen
            </Text>
            <Button 
                title = "Access Your Profile"
                onPress={() => alert("Still working on Setting Up User Screen")}
            />
            <Text style={styles.body}>
                FoodScan provides essential nutrition information to help keep track of your meals
            </Text>
            <Text style={styles.body}>
                Click Below to Access the Barcode Scanner
            </Text>
            <Button 
                title = "Barcode Scanner"
                onPress={() => toBarcodeScreen()}
            />
            <Text style={styles.body}>
                Click Below to Sign Out
            </Text>
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
      marginBottom: 40,
      marginTop: -100
    },
    body: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: 60,
      marginBottom: 20
    }
})

export default DashboardScreen;