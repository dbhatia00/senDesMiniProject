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

