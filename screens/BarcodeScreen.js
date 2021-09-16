import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { db } from './Firebase'
import configData from '../config.json'

const BarcodeScreen = () => {
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
      
      //Get Serving Size asynchronously
      async function handleInput(){
        let input = '';
        console.log(input);
        input = await getInput();
        console.log(input);
      };

      function getInput(){
        return new Promise((resolve) =>{
          const servingSize = Alert.prompt(
            "Barcode scanned!",
            "Please enter number of servings",
            undefined,undefined,'0','number-pad'
          );
          resolve(servingSize);
        });
      };
      handleInput();
      
      
      APIHandler(data.substring(1));
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

APIHandler = (inputData) => {
  db.collection('food_items')
  api_key = configData.API_KEY
  fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${inputData}&api_key=${api_key}`)
    .then(response => response.json())
    .then(
      data => {
        console.log(data);
        addData(data);
      });
}

addData = (data) => {
  db.collection('food_items')
    .add(data)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default BarcodeScreen;