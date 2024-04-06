import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './routes/authStack';
import MainAppTab from './routes/mainAppTab';

import Onboarding from './components/onboarding';

const getFonts = () => Font.loadAsync({
  'Oswald': require('./assets/fonts/oswald.ttf'),
  'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
  'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
});

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size='large' />
    </View>
  )}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // const checkLoginStatus = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@isLoggedIn');
  //     if (value !== null) {
  //       setisLoggedIn(true);
  //     }
  //   } catch (error) {
  //     console.log('Error @checkLoginStatus: ', err);
  //   } finally {
  //     setisLoggedIn(false);
  //   }
  // }

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
  
      if(value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect (() => {
    checkOnboarding();
  }, [])

  

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        {
          loading ? 
            <Loading /> 
          : viewedOnboarding ? 
             
            isLoggedIn ? <MainAppTab />
            : <AuthStack />
            
          : <Onboarding />
        }

        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View>
        <AppLoading 
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
      </View>
    );
  }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;