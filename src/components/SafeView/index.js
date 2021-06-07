import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const SafeView = ({ style, children, ...props }) => {
	return (
		<SafeAreaView style={[styles.container, style]}>
			{children}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export { SafeView };
