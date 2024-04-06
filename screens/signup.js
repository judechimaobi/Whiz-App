import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ScrollView,
  Image, 
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Signup({ navigation }) {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
      Updates.reloadAsync();
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }
  function pressHandler() {
    navigation.navigate('Login');
  }

  // const image = { uri: "../assets/images/app2.png" };
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <ImageBackground source={require('../assets/images/app2.png')} resizeMode='cover' style={styles.bgImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image
            style={styles.logoImage}
            source={require('../assets/images/logo.png')}
            />
            

            <KeyboardAvoidingView behavior='position'>   
              <Text style={styles.titleText}>Sign up</Text>
              <TextInput
                placeholder="Email address"
                // value={email}
                // onChangeText={setEmail}
                style={styles.textField}
              />

              <TextInput
                placeholder="Password"
                // value={password}
                // onChangeText={setPassword}
                style={styles.textField}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.signupBtn} onPress={() => {alert('Sign up coming soon')}}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookBtn} onPress={() => {alert('Facebook Sign up coming soon')}}>
              <Text style={styles.btnText}>Sign up with facebook</Text>
            </TouchableOpacity>
            
            <View>
              <TouchableOpacity onPress={pressHandler}>
                <Text style={styles.bottomText}>Have an account? 
                  <Text style={styles.bottomLoginText}> Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center"
  },
  logoImage: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 80,
    width: 60, 
    height: 100
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textField: {
    width: '100%',
    marginBottom: 15,
    padding: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#333' 
  },
  bottomText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  bottomLoginText: {
    fontFamily: 'Montserrat-Bold',
  },
  signupBtn: {
    width: '100%',
    marginBottom: 15,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#f00066',
  },
  facebookBtn: {
    width: '100%',
    marginBottom: 15,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#1e319d',
    
  },
  btnText: {
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});
