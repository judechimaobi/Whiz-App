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

export default function Publish({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderTitleBar}>
          <Text style={styles.mainHeaderTitle}>Publish</Text>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={28} color='#333' style={styles.mainHeaderBellIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBar}></View>
      </View>

      <ScrollView style={{backgroundColor: '#fff'}} showsHorizontalScrollIndicator={false}>
        
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
});
