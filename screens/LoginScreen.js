//LoginScreen.js

//Modules needed for LoginScreen.js
import React from 'react';
import { Image, View, Text, StyleSheet, Button } from 'react-native';

//Source location of supermarket image
import logo from './assets/supermarket.jpg'

//Import the Google module for authentication 
import * as Google from 'expo-google-app-auth';

//Import Firebase auth and provider fields from the Firebase.js file
import { auth, provider } from './Firebase';

//Login Screen function
//Includes navigation variable to switch to other screens
const LoginScreen = ({ navigation }) => {

  //isUserEqual function used to ensure the googleUser and firebaseUser are the same
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      //Get the provider data from Firebase
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === provider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true; 
        }
      }
    }
    return false; 
  }
  
  //onSignIn function creates a credential for a google user and signs them into Firebase
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    var unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      //Calls isUserEqual to compare google and firebase user
      if (!isUserEqual(googleUser, firebaseUser)) {
        //Initialization of credential
        var credential = provider.credential(
            googleUser.idToken,
            googleUser.accessToken);
  
        //Signs the user into Firebase
        auth.signInWithCredential(credential);
        //Case where the user is already signed in...prints to the console
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }
  
  //signInWithGoogleAsync function uses an iOS client ID to allow a user to sign in using Gmail
  signInWithGoogleAsync = async () => {
    try {
      //iOS client id variable and scope passed to Google.logInAsync() function 
      const result = await Google.logInAsync({
        iosClientId: "774439232289-u2gjrt8gu0k8ftng4m3lh3h3j6d0mf7k.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      //If the sign in is successful...
      if (result.type === 'success') {
        //Calls the onSignIn function with result parameter to sign the user into firebase
        onSignIn(result);
        //Successful sign in navigates the user to the Dashboard Screen
        navigation.navigate('Dashboard Screen')
        return result.accessToken;
      //Error Handling
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  //Return positions the supermarket image above welcome text
  //Under welcome text is a button to sign the user in with Gmail
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 305 }}/>
      <Text style={styles.title}>
        Welcome to FoodScan
      </Text>
      <Button
        title = "Click Here to Sign In via Google"
        onPress={() => signInWithGoogleAsync()}
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
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 40,
    textAlign: 'center'
  },
  body: {
    fontSize: 25,
    marginTop: 0,
    fontSize: 25,
  }
})

export default LoginScreen;