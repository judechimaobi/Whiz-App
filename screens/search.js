import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput
 } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <View style={styles.mainHeaderTitleBar}>
          <Text style={styles.mainHeaderTitle}>Search</Text>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={28} color='#333' style={styles.mainHeaderBellIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBar}></View>
      </View>

      <View>
        <TextInput
          placeholder="Search"
          style={styles.textField}
        />
      </View>

      <ScrollView style={{backgroundColor: '#fff'}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.searchResult}>
          <Text style={styles.searchResultText}>Result 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchResult}>
          <Text style={styles.searchResultText}>Result 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchResult}>
          <Text style={styles.searchResultText}>Result 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchResult}>
          <Text style={styles.searchResultText}>Result 4</Text>
        </TouchableOpacity>
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

  textField: {
    width: '100%',
    marginBottom: 15,
    padding: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#eee',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#333',
  },
  searchResult: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
  searchResultText: {
    textAlign: 'left',
    color: '#333',
  }
});
