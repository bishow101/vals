import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, ScrollView, FlatList } from 'react-native'
import { IconButton, Colors, TouchableRipple } from 'react-native-paper'
import { Card, CardContent, CardActions } from '../components/Card'

import jokes from '../dummy/jokes'

const Item = ({ item }) => {
	
//	const [ showMore, setShowMore ] = useState(false);
	
	// const onTextLayout = e => {
	// 	setShowMore(e.nativeEvent.lines.length > numberOfLines);
	// }
	
	return (
		<Card>
			<CardContent>
				<Text numberOfLines={3} style={styles.text}>{item.description}</Text>
			</CardContent>
			<CardActions>
				<IconButton style={[styles.iconButton, styles.left]} icon='heart' color={Colors.red300} size={20} onPress={() => {}}/>
				<IconButton style={styles.iconButton, styles.right} icon='share' color={Colors.black} size={20} onPress={() => {}} />
			</CardActions>
		</Card>
	)
}


const HomeScreen = () => {
	
	return (
		<SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: '#dfdfdf' }}>
			<FlatList 
				data={jokes} 
				renderItem={Item}
				keyExtractor={(item) => `${item.id}`} 
				showsVerticalScrollIndicator={false}
			/>
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

export default HomeScreen
