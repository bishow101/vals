import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'


const SettingsScreen = () => {
	
	return (
		<SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: '#dfdfdf' }}>
			<Text>Settings in </Text>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	text: {
		color: '#404040',
		fontSize: 16,
	},
	
	iconButton: {
		margin: 0
	},
	
	left: {
		margin: 0,
	},
	
	right: {
		margin: 0
	},
})

export default SettingsScreen

