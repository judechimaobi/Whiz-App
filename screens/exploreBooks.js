import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground
 } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';





export default function ExporeBooks({ navigation }) {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }

  return (

      <View style={styles.container}>
        <ScrollView style={{backgroundColor: '#fff'}} showsHorizontalScrollIndicator={false}>

          <Text style={styles.subtitle}>Weekly bestseller</Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.topSection}>
            
            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/book1.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage]}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/book2.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage]}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/book3.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage]}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/book4.png')} 
                resizeMode='cover' 
                style={[styles.bgImage]}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/book5.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage]}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>




          <Text style={styles.subtitle}>Latest</Text>
          <View style={styles.latestBody}>
            <View style={[styles.itemTab]}>
              <ImageBackground 
                source={require('../assets/images/book5.jpg')} 
                resizeMode='cover' 
                style={styles.tabImage}
                imageStyle={{ borderRadius: 20}} >
              </ImageBackground>

              <View>
                <Text style={styles.tabTitle}>The God you never knew</Text>
                <Text style={styles.tabSubtitle}>By Henry Onyedikachi</Text>
                <View style={styles.tabActionBtn}>
                  <TouchableOpacity style={styles.shareReviewBtn}>
                    <Text style={styles.shareReviewBtnText}>
                      <Ionicons name={'pencil'} size={14} />
                      Review
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shareReviewBtn}>
                    <Text style={styles.shareReviewBtnText}>
                      <Ionicons name={'airplane'} size={14} />
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Ionicons name={'download'} size={32} />
                </TouchableOpacity>
              </View>
            </View>
          </View>




        <Button onPress = {clearOnboarding} title='Reset'></Button>
        </ScrollView>
        
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
  bgImageView: {
    marginRight: 10,
  },
  bgImage: {
    width: 100,
    height: 150,
    marginBottom: 15,
    padding: 20,
    justifyContent: 'flex-end'
  },
  subtitle: {
    fontFamily: 'Oswald-Bold',
    fontSize: 12,
    marginBottom: 10
  },
  bgImageTitle: {
    fontFamily: 'Oswald',
    color: '#fff',
    fontSize: 16,
    lineHeight: 18,
  },
  bgImageDesc: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },
  imageTabTitle: {
    fontFamily: 'Oswald',
    color: '#fff',
    fontSize: 22,
    lineHeight: 25
  },
  imageTabDesc: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },




  latestBody: {
    padding: 20,
  },
  itemTab: {
    flexDirection: 'row',
  },
  tabImage: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  tabTitle: {
    marginBottom: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  tabSubtitle: {
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  tabActionBtn: {
    flexDirection: 'row',
  },
  shareReviewBtn: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#333',
    marginRight: 5,
  },
  shareReviewBtnText: {
    fontSize: 10,
    color: '#333',
  }

});

