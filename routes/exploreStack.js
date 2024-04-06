import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground
 } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Explore from '../screens/explore';
import ExploreBooks from '../screens/exploreBooks';
import ExploreMusic from '../screens/exploreMusic';
import Checkout from '../screens/checkout';

// function StackHeader(pageName) {
//   return (
//     <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'red'}}>
//       <View>
//         <Text>Back</Text>
//       </View>
//       <View>
//         <Text>{pageName}</Text>
//       </View>
//       <View>
//         <Text>Notice</Text>
//       </View>
//     </View>
//   );
// }

const ExpStack = createStackNavigator();

function ExploreStack() {
  return (
    <ExpStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Explore">
      <ExpStack.Screen name="Explore" component={Explore} />
      <ExpStack.Screen 
        name="ExploreBooks" 
        component={ExploreBooks}
        // options={{ headerTitle: (props) => <StackHeader {...props} /> }} 
        />
      <ExpStack.Screen name="ExploreMusic" component={ExploreMusic} />
      <ExpStack.Screen name="Checkout" component={Checkout} />
      {/* <ExploreStack.Screen name="Home" component={Home} options={{ title: '', headerTransparent: true, headerTintColor: '#fff' }} /> */}
    </ExpStack.Navigator>
  );
}


export default ExploreStack;