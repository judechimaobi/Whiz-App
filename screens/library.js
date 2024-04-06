import React, { useState, useRef, useEffect } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  FlatList
 } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const bookSource = [
  {
      id: '1',
      image: require('../assets/images/book1.jpg'),
  },
  {
      id: '2',
      image: require('../assets/images/book7.jpg'),
  },
  {
      id: '3',
      image: require('../assets/images/book2.jpg'),
  },
  {
      id: '4',
      image: require('../assets/images/book3.jpg'),
  },
  {
      id: '5',
      image: require('../assets/images/book4.png'),
  },
  {
      id: '6',
      image: require('../assets/images/book5.jpg'),
  },
  {
      id: '7',
      image: require('../assets/images/book6.jpg'),
  },
  {
      id: '8',
      image: require('../assets/images/book7.jpg'),
  },
  {
      id: '9',
      image: require('../assets/images/book8.jpg'),
  },
  {
      id: '10',
      image: require('../assets/images/book9.jpg'),
  }
];








const musicSource = [
  {
      id: '1',
      image: require('../assets/images/mercy.jpg'),
  },
  {
      id: '2',
      image: require('../assets/images/sinach.jpg'),
  },
  {
      id: '3',
      image: require('../assets/images/dunsin-oyekan.jpg'),
  },
  {
      id: '4',
      image: require('../assets/images/mercy.jpg'),
  },
  {
      id: '5',
      image: require('../assets/images/sinach.jpg'),
  }
];







export default function Library() {




  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnbaording: ' ,err)
    }
  }


  var bgColor;
  const [tabFocus, setTabFocus] = useState([
      bgColor='#eee'
    ]);

 

  const selectTab = () => {
    bgColor = 'red';
    alert('Tab chosen. The color is now '+bgColor);
  }

  return (
    
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderTitleBar}>
            <Text style={styles.mainHeaderTitle}>Library</Text>
            <TouchableOpacity>
              <Ionicons name='notifications-outline' size={28} color='#333'  style={styles.mainHeaderBellIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBar}></View>
        </View>


        
        <View style={styles.tabMenu}>
          <TouchableOpacity 
            onPress={() => selectTab()}
            style={[styles.tabMenuTab, {borderRightWidth: 1, borderRightColor: '#f8f8f8', backgroundColor: bgColor}]}>
            <Text style={styles.tabTitle}>
              Book shelf</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabMenuTab}>
            <Text style={styles.tabTitle}>
              Music library</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={bookSource}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.bgImageView}>
              <ImageBackground 
                source={item.image} 
                resizeMode='cover'
                style={[styles.bgImage, { width: 90, height: 150 }]}
                imageStyle={{ borderRadius: 10}} >
              </ImageBackground>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button onPress = {clearOnboarding} title='Reset'></Button>
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



  tabMenu: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  tabMenuTab: {
    padding: 10
  },
  tabTitle: {
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 50,
    fontSize: 14,
    marginBottom: 10
  },


  bgImageView: {
    flex: 1,
    marginRight: 10,
  },
  bgImage: {
    marginBottom: 15,
    padding: 20,
    justifyContent: 'flex-end'
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

