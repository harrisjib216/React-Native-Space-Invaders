import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SafeView } from '../../components';

const Game = ({ navigation, ...props }) => {
	return (
		<SafeView>
			<Text>Hello</Text>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export { Game };
