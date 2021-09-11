//Expo Modules
import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Google from "expo-google-app-auth"


export default class App extends React.Component {
  //Constructor for managing different pages and signedIn state
  constructor(props) {
    super(props)
    //State initialization
    this.state = {
      signedIn: false,
    }
  }
  //Function to handle signedIn state
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        //Credential for iOS clients
        //Sign-in is only possible on iOS
        iosClientId: "774439232289-l87u84h2b2qgqtdf2sfj83drk6nmvsf7.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })
      //If the sign-in is successful...the state is changed to true
      if (result.type === "success") {
        this.setState({
          //State changed to true
          signedIn: true,
        })
      //Situation where the user exits sign-in page
      } else {
        console.log("cancelled")
      }
    //Situation where error occurs during sign-in
    } catch (e) {
      console.log("error", e)
    }
  }

  render() {
    return (
      <View style={barcode_styles.barcode_view}>
        {this.state.signedIn ? (
          <BarcodePage/>
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

//Login Page layout: text header and a button to begin sign-in process
const LoginPage = props => {
  return (
    <View style={login_styles.login_view}>
      <Text style={login_styles.header}>Sign In With Google</Text>
      <Button title="Click to Authenticate" onPress={() => props.signIn()} />
    </View>
  )
}

//Barcode Page layout: notifies user of camera access status, full camera view, notifies user of successful scan
const BarcodePage = props => {
  const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data.substring(1)} has been scanned!`);
      APIHandler(data.substring(1));
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
        <View style={barcode_styles.barcode_view}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

//API Caller
function APIHandler (inputData){
  fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${inputData}&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(
      data => {
        console.log(data);
        //writeJsonFile('temp.json', JSON.stringify(data));
      });

  
}

//Styles for login page and barcode page

//Barcode page style
const barcode_styles = StyleSheet.create({
  barcode_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

//Login Page style
const login_styles = StyleSheet.create({
  login_view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
