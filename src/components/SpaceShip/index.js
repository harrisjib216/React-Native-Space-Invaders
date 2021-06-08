import React from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

const SpaceShip = ({ ...props }) => {
	return (
		<View style={styles.container}>
			<Animated.Image
				source={{
					uri: 'https://cdn0.iconfinder.com/data/icons/video-games-outline/60/050_-_Space_Invaders-512.png',
				}}
				style={styles.image}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		bottom: 0,
		height: 100,
		width: '100%',
		paddingBottom: 20,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	image: {
		width: 50,
		height: 50,
	},
});

export { SpaceShip };
