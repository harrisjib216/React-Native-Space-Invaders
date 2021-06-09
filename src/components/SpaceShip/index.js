import React, { useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { screenWidth } from '../../modules/helpers';

const SpaceShip = ({ ...props }) => {
	const [position, setPosition] = useState(
		new Animated.ValueXY({ x: screenWidth / 2 - 25, y: 10 }),
	);

	return (
		<View
			style={styles.container}
			onMoveShouldSetResponder={() => true}
			onResponderMove={(gestureState) => {
				if (gestureState.nativeEvent.pageX <= 30) {
				} else if (gestureState.nativeEvent.pageX >= screenWidth - 30) {
				} else {
					position.x.setValue(gestureState.nativeEvent.pageX - 25);
				}
			}}>
			<Animated.Image
				source={{
					uri: 'https://cdn0.iconfinder.com/data/icons/video-games-outline/60/050_-_Space_Invaders-512.png',
				}}
				style={[styles.image, position.getLayout()]}
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
		top: 15,
		width: 50,
		height: 50,
		position: 'absolute',
	},
});

export { SpaceShip };
