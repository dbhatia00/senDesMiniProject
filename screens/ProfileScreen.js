//ProfileScreen.js

//Modules needed for ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Import Firebase auth field from the Firebase.js file
import { auth } from './Firebase';

//Import global variables cal_total and food_name from Barcode Screen
import { cal_total, food_name } from './BarcodeScreen';

//Profile Screen function 
const ProfileScreen = () => {
    
    //Return contains welcome text listing the user email and a message
    //The Profile Screen contains a total calorie counter and Most Recent Food Description
    return (
        <View>
            <Text style={styles.title}>
                Hello {auth.currentUser ? auth.currentUser.email : "unknown user"}
            </Text>
            <Text style={styles.body}>
                Welcome to your profile page!
            </Text>
            <Text style={styles.body2}>
                Total Calorie Intake: {cal_total} 
            </Text>
            <Text style={styles.body2}>
                Most Recent Food: {food_name}
            </Text>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40
    },
    body: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    body2: {
        fontSize: 25,
        textAlign: 'left',
        marginTop: 100
    }
});

export default ProfileScreen;