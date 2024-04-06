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
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function RecoverPassword({ navigation }) {
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
              <Text style={styles.titleText}>Recover password</Text>
              <TextInput
                placeholder="Email address"
                // value={email}
                // onChangeText={setEmail}
                style={styles.textField}
              />
              <Text style={styles.descText}>A link to reset your password will be sent to this address</Text>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.signupBtn} onPress={() => {alert('Sign up coming soon')}}>
              <Text style={styles.btnText}>
                Send email
              </Text>
            </TouchableOpacity>

            <View>
              <TouchableOpacity style={styles.goBack} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.bottomLoginText}>
                  <Ionicons name="arrow-back" size={18} color="#333" />
                  Go back</Text>
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
  },
  descText: {
    padding: 5,
    textAlign: 'center',
  },
  goBack: {
    // alignSelf: 'center'
    // justifyContent: 'flex-end'
  }
});
