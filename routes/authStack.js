import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../screens/signup';
import Login from '../screens/login';
import RecoverPassword from '../screens/recoverPassword';
import MainAppTab from './mainAppTab';


const Stack = createStackNavigator();
export default function AuthStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="RecoverPassword" component={RecoverPassword} />
				<Stack.Screen name="MainAppTab" component={MainAppTab} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
// const AuthStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
// 		headerTintColor: '#03045e',
// 		headerTitleAlign: 'center',
// 		headerTitleStyle: {
// 			fontFamily: 'Proxima-Nova-Bold',
// 			fontWeight: 'bold',
// 		},
// 	}
// });




// export default AuthStack;