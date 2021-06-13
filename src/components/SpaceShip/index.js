import React, { useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { screenWidth } from '../../modules/helpers';

const SHIP_SIZE = 64;
const SHIP_MID = SHIP_SIZE / 2;

const SpaceShip = ({ ...props }) => {
	const [position, setPosition] = useState(
		new Animated.ValueXY({ x: screenWidth / 2 - SHIP_MID, y: 0 }),
	);

	const [cannonGlow, setCannonGlow] = useState(new Animated.Value(0.0));

	const animateCannonGlow = (reset = false) => {
		if (reset) {
			return cannonGlow.setValue(0.0);
		}

		Animated.timing(cannonGlow, {
			toValue: 1,
			duration: 10,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View
			style={styles.container}
			onStartShouldSetResponder={() => true}
			onResponderGrant={() => animateCannonGlow()}
			onResponderEnd={() => animateCannonGlow(true)}
			onResponderMove={({ nativeEvent: { pageX } }) => {
				if (pageX >= 30 && pageX <= screenWidth - 30) {
					position.x.setValue(pageX - SHIP_MID);
				}
			}}>
			<Animated.View
				style={[styles.spaceshipWrapper, position.getLayout()]}>
				{/* ship image */}
				<Animated.Image
					source={{
						uri: 'https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kspaceduel.png',
					}}
					style={[styles.image]}
				/>

				{/* left cannon glow */}
				<Animated.View
					style={[
						styles.cannonGlow,
						styles.cannonGlowLeft,
						{ opacity: cannonGlow },
					]}
				/>

				{/* right cannon glow */}
				<Animated.View
					style={[
						styles.cannonGlow,
						styles.cannonGlowRight,
						{ opacity: cannonGlow },
					]}
				/>
			</Animated.View>
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
	},
	spaceshipWrapper: {
		width: 64,
		height: 68,
		position: 'absolute',
		alignItems: 'center',
	},
	cannonGlow: {
		width: 3,
		height: 3,
		borderRadius: 1.5,
		position: 'absolute',
		backgroundColor: 'lightgreen',
	},
	cannonGlowLeft: {
		left: SHIP_SIZE / 2 - 6.5,
	},
	cannonGlowRight: {
		right: SHIP_SIZE / 2 - 5,
	},
	image: {
		width: 64,
		height: 64,
		transform: [{ scaleY: -1 }],
	},
});

export { SpaceShip };
