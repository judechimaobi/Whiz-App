import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import ExploreStackScreen from './exploreStack';
import ExploreStack from './exploreStack';
import Search from '../screens/search';
import Publish from '../screens/publish';
import Library from '../screens/library';
import Profile from '../screens/profile';


const Tab = createBottomTabNavigator();

export default function MainAppTab() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          
            tabBarActiveTintColor: '#f00066',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerShown: false,
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ExploreStack') {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Publish') {
              iconName = focused ? 'add' : 'add-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          
        })}
      >
        {/* <Tab.Screen name="Explore" component={ExploreStackScreen} /> */}
        <Tab.Screen name="ExploreStack" component={ExploreStack} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Publish" component={Publish} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
	headerRightContainer: {
		right: 15,
	}
})


// f00066 ============= Magenta
// c30242 ============= Magenta dark
// export default createAppContainer(BottomTabNavigator);