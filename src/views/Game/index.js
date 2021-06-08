import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { SafeView, SpaceShip } from '../../components';

const Game = ({ navigation, ...props }) => {
	return (
		<SafeView style={styles.container}>
			{/* spaceship */}
			<SpaceShip />
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: 'black',
	},
});

export { Game };
