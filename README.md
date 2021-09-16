## Instructions for running application on iOS

1) Download project onto local machine
  
    a) Place the project folder in a known location 

2) Using Linux, Mac OS, or Windows...navigate to project directory

3) Install the Expo Command Line within the project directory:

    a) npm install expo
 
4) Import React Navigation module:
  
    a) npm install @react-navigation/native
    
    b) expo install react-native-screens react-native-safe-area-context
    
    c) npm install @react-navigation/native-stack
    
    d) npm install @react-navigation/stack
    
    e) expo install react-native-gesture-handler

5) Install the Google module for Expo:

    a) expo install expo-google-app-auth
    
6) Install the Firebase module for Expo:

    a) expo install firebase
    
7) Install the Barcode Scanner module for Expo:

    a) expo install expo-barcode-scanner

8) Set up a config.json file in the root of your project for your FDC API key. The format should be the following -
  
  {
    "API_KEY": "..."
  }
    
9) Run the project:

    a) expo start 
    
10) Navigate to the web server running the application:
    
    a) Click "Tunnel" button above the barcode 
    
    b) If Expo Go client app not downloaded...download from App Store
    
    c) Using iPhone camera...scan barcode and open app in Expo Go 



## Using the App

When running correctly, the app will begin in the login screen as shown below. 

<img src="https://user-images.githubusercontent.com/55998466/133652383-17f6cf8f-4c51-42ae-956a-f6488103120c.png" width="200">

Clicking on the "Click here to sign in via google" will prompt the user to sign in

<img src="https://user-images.githubusercontent.com/55998466/133652502-1e828065-cf42-49b2-9445-cf7acf1655cb.png" width="200">

A successful sign in will land the user in the main menu

<img src="https://user-images.githubusercontent.com/55998466/133652815-bbc42404-87dc-4493-979c-4f2302faef6e.png" width="200">

From the main menu, the user can proceed to the barcode scanner module. Upon presenting a barcode to the app, the user is prompted for the serving size while the data is uploaded to the database.

<img src="https://user-images.githubusercontent.com/55998466/133652860-0b1bee0b-cb0b-448b-bb5c-91ebfbb2b1fd.png" width="200">

From here, the user will be prompted to tap to scan again, or return to the main menu via the back button in the top left corner of the screen.

<img src="https://user-images.githubusercontent.com/55998466/133652985-f5b6cf3f-0152-40fd-9e51-ef7b589234c3.png" width="200">
