import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './screens/Home'
import SettingsScreen from './screens/Settings'
import Icon from 'react-native-vector-icons/Feather'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()


const App = () => {
	
	return (
		<NavigationContainer>
			<Tab.Navigator inactiveColor='grey' activeColor='#404040' barStyle={{ backgroundColor: 'transparent', color:'black', elevation: 0, borderRadius: 10 }}>
				<Tab.Screen 
				options={{ 
				tabBarLabel: 'Home', 
				tabBarIcon: ({ color }) => ( 
					<Icon 
						name="home" 
						color={color} 
						size={24} 
					/>)
				}}
				name='Home' 
				component={HomeScreen} />
				<Tab.Screen 
					name='Settings' 
					component={SettingsScreen} 
					options={{
					tabBarIcon: ({ color }) => ( 
					<Icon 
						name="settings" 
						color={color} 
						size={24} 
					/>)
				}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
		
	)
}

export default App
