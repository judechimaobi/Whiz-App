import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  Image
 } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';





export default function Checkout() {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }

  return (
    
      <View style={styles.container}>
        {/* <View style={styles.mainHeader}>
          <View style={styles.mainHeaderTitleBar}>
            <Text style={styles.mainHeaderTitle}>Explore</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' size={28} color='#333' style={styles.mainHeaderBellIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBar}></View>
        </View> */}

        <ScrollView style={{backgroundColor: '#fff'}} showsHorizontalScrollIndicator={false}>
					<View>
            <ImageBackground 
              source={require('../assets/images/image1.jpg')} 
              resizeMode='cover'
              style={[styles.bgImage]}
              imageStyle={{ borderRadius: 30}} >
            </ImageBackground>
            
            <View>
              <Text style={styles.itemTitle}>Intensive love</Text>
              <Text style={styles.itemDesc}>by Kenylinks</Text>
              {/* <Image source={require('../assets/images/image1.jpg')} style={styles.rating} /> */}
            </View>

            <View style={styles.bodyArea}>
              <Text style={styles.descText}>DESCRIPTION</Text>
              <View style={styles.line}></View>
              <Text style={styles.mainText}>
                This is an awesome product that you will love to listen to or read.This is an awesome product that you will love to listen to or read.This is an awesome product that you montserrat will love to listen to or read.This is an awesome product that you will love to listen to or read.This is an awesome product montserrat love to listen tomontserrat or read.This is an awesome product that you will love to listen to or read.This is an awesome product that you will love montserratto listen to or read.This is an awesome product that you will love to listen to or read.This is an awesomemontserrat product that you will love to listen to or read.This is an awesome product that you will love to listen to or read.
              </Text>
              <Text style={styles.priceText}>Price: N300.00</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.checkoutView}>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnText}>Check out</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
  },
  bgImage: {
    margin: 10,
    alignSelf: 'center',
    width: 300,
    height: 300, 
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center'
  },
  itemTitle: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontSize: 25,
  },
  itemDesc: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#aaaaaa',
  },
  rating: {
    justifyContent: 'center',
  },
  descText: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#aaaaaa',
  },
  line: {
    height: 1,
    marginBottom: 10,
    backgroundColor: '#aaa',
  },
  bodyArea: {
    padding: 10,
  },
  mainText: {
    fontFamily: 'Montserrat-Regular',
    lineHeight: 22,
    color: '#333',
  },
  priceText: {
    fontFamily: 'Montserrat-Bold',
    lineHeight: 52,
    fontSize: 16,
    color: '#333',
  },
  checkoutView: {
    bottom: 0,
    // position: 'sticky',
  },
  checkoutBtn: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f00066',
  },
  checkoutBtnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },

});

