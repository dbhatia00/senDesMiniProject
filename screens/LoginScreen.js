import React from 'react';
import { Image, View, Text, StyleSheet, Button } from 'react-native';
import logo from './assets/supermarket.jpg'
import * as Google from 'expo-google-app-auth';
import { auth, provider } from './Firebase';

const LoginScreen = ({ navigation }) => {
 isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
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
  
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    var unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = provider.credential(
            googleUser.idToken,
            googleUser.accessToken);
  
        auth.signInWithCredential(credential);
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }
  
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: "774439232289-u2gjrt8gu0k8ftng4m3lh3h3j6d0mf7k.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        onSignIn(result);
        navigation.navigate('Dashboard Screen')
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 305 }}/>
      <Text style={styles.title}>
        Welcome to FoodScan
      </Text>
      <Text style={styles.body}>
        Sign In Using Google
      </Text>
      <Button
        title = "Click Here to Sign In"
        onPress={() => signInWithGoogleAsync()}
      />
    </View>
  );
}

export default LoginScreen;

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
    marginBottom: 140,
    marginTop: 30
  },
  body: {
    fontSize: 25,
  }
})