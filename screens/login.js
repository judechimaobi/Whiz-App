import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ScrollView,
  Image, 
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
      Updates.reloadAsync();
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }
  function pressHandler() {
    navigation.navigate('Signup');
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Image
        style={styles.logoImage}
        source={require('../assets/images/logo.png')}
        />
        

        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={10}>   
          <Text style={styles.titleText}>Login</Text>
          <TextInput
            placeholder="Email address"
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically={true}
            // value={email}
            // onChangeText={setEmail}
            style={styles.textField}
          />

          <TextInput
            placeholder="Password"
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically={true}
            secureTextEntry={true}
            // value={password}
            // onChangeText={setPassword}
            style={styles.textField}
          />

          <TouchableOpacity style={styles.forgotPassword} onPress={()=> {navigation.navigate('RecoverPassword')}}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.signupBtn} onPress={() => {navigation.navigate('MainAppTab')}}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookBtn} onPress={() => {alert('Facebook Login coming soon')}}>
          <Text style={styles.btnText}>Login with facebook</Text>
        </TouchableOpacity>
      <View>
          
            
      <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.bottomText}>Don't have an account? 
            <Text style={styles.bottomLoginText}> Create account</Text>
          </Text>
      </TouchableOpacity>
            
          
        </View>
        
        <Button onPress = {clearOnboarding} title='Reset'></Button>
        </View>
      </TouchableWithoutFeedback>
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
  forgotPassword: {
    marginBottom: 15,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    // textAlign: 'right',
    fontFamily: 'Montserrat-Bold',
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
