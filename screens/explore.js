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





export default function Expore({ navigation }) {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }

  return (
    
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderTitleBar}>
            <Text style={styles.mainHeaderTitle}>Explore</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' size={28} color='#333'  style={styles.mainHeaderBellIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBar}></View>
        </View>
        <ScrollView style={{backgroundColor: '#fff'}} showsHorizontalScrollIndicator={false}>







          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={styles.topSection}>
            
            <TouchableOpacity style={[styles.bgImageView, {marginRight: 20}]} onPress={() => {navigation.navigate("ExploreBooks")}}>
              <ImageBackground 
                source={require('../assets/images/image1.jpg')} 
                resizeMode='cover'
                style={[styles.bgImage, { height:200}]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.bgImageTitle}>Books</Text>
                    <Text style={styles.bgImageDesc}>Read books and sell your own books all in one place</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bgImageView]} onPress={() => {navigation.navigate("ExploreMusic")}}>
              <ImageBackground 
                source={require('../assets/images/image2.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { height:200}]}
                
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.bgImageTitle}>Music</Text>
                    <Text style={styles.bgImageDesc}>Play songs and sell your own songs all in one place</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>









          <Text style={styles.subtitle}>Explore music</Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/sinach.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Greatest Lord</Text>
                    <Text style={styles.imageTabDesc}>by Sinach</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground
                source={require('../assets/images/dunsin-oyekan.jpg')}
                resizeMode='cover'
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30 }} >
                  <View>
                    <Text style={styles.imageTabTitle}>I'll be here</Text>
                    <Text style={styles.imageTabDesc}>by Dunsin Oyekan</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/mercy.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Igwe</Text>
                    <Text style={styles.imageTabDesc}>by Mercy Chinwo</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground
                source={require('../assets/images/dunsin-oyekan.jpg')}
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>I'll be here</Text>
                    <Text style={styles.imageTabDesc}>by Dunsin Oyekan</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/mercy.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Igwe</Text>
                    <Text style={styles.imageTabDesc}>by Mercy Chinwo</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>








          <Text style={styles.subtitle}>Explore books</Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/sinach.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Greatest Lord</Text>
                    <Text style={styles.imageTabDesc}>by Sinach</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/dunsin-oyekan.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>I'll be here</Text>
                    <Text style={styles.imageTabDesc}>by Dunsin Oyekan</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/mercy.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Igwe</Text>
                    <Text style={styles.imageTabDesc}>by Mercy Chinwo</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/dunsin-oyekan.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>I'll be here</Text>
                    <Text style={styles.imageTabDesc}>by Dunsin Oyekan</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgImageView} onPress={() => {navigation.navigate("Checkout")}}>
              <ImageBackground 
                source={require('../assets/images/mercy.jpg')} 
                resizeMode='cover' 
                style={[styles.bgImage, { width: 120, height: 250 }]}
                imageStyle={{ borderRadius: 30}} >
                  <View>
                    <Text style={styles.imageTabTitle}>Igwe</Text>
                    <Text style={styles.imageTabDesc}>by Mercy Chinwo</Text>
                  </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>




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
  mainHeader: {
    marginBottom: 15,
  },
  mainHeaderTitleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mainHeaderTitle: {
    fontFamily: 'Oswald-Bold',
    fontSize: 52,
  },
  mainHeaderBellIcon: {
    fontSize: 32,
  },
  headerBar: {
    width: 40,
    height: 7,
    backgroundColor: '#f00066',
    borderRadius: 50,
  },
  topSection: {
    flexDirection: 'row',
  },
  bgImageView: {
    marginRight: 10,
  },
  bgImage: {
    marginBottom: 15,
    padding: 20,
    justifyContent: 'flex-end'
  },
  subtitle: {
    fontFamily: 'Oswald-Bold',
    fontSize: 18,
    marginBottom: 10
  },
  bgImageTitle: {
    fontFamily: 'Oswald',
    color: '#fff',
    fontSize: 32,
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
});

