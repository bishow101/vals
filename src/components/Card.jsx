import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableRipple } from 'react-native-paper'


export const Card = ({ children }) => {
	return (
		<TouchableRipple underlayColor='blue' rippleColor='grey' style={styles.card} onPress={() => {}}>
			<>
				{ children }
			</>
		</TouchableRipple>
	)
}


export const CardContent = ({ children }) => {
	return (
		<View style={styles.cardContent}>
			{ children }
		</View>
	)
}


export const CardActions = ({ children }) => {
	return (
		<View style={styles.cardActions}>
			{ children }
		</View>
	)
}


const styles = StyleSheet.create({
	card: {
		width: '100%',
		padding: 12,
		backgroundColor: '#f9f9f9',
		alignItems: 'center',
		marginVertical: 6,
		borderRadius: 10,
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowColor: '#fafafa',
		elevation: 0,
		
	},
	
	cardContent: {
		width: '100%',
		marginBottom: 5,
	},
	
	cardActions: {
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexShrink: 0,
		alignItems: 'center',
		marginTop: 5,
	}
})