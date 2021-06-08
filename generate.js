const fs = require('fs');
const { argv } = require('process');

function createDirectory(type, moduleName, content) {
	const viewsPath = `./src/${type}/${moduleName}`;

	// create directory
	fs.mkdir(viewsPath, { recursive: true }, (dirErr) => {
		if (dirErr) {
			throw Error(dirErr);
		}

		// create file
		fs.writeFile(`${viewsPath}/index.js`, content, (fileErr) => {
			if (fileErr) {
				throw Error(fileErr);
			}
		});

		// append view or component
		fs.appendFile(
			`./src/${type}/index.js`,
			`export { ${moduleName} } from './${moduleName}';\n`,
			(appendErr) => {
				if (appendErr) {
					throw Error(appendErr);
				}
			},
		);
	});
}

const makeView = (viewName) =>
	createDirectory(
		'views',
		viewName,
		`
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { SafeView } from '../../components';

const ${viewName} = ({ navigation, ...props }) => {
    return (
        <SafeView>
            <Text>Hello</Text>
        </SafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export { ${viewName} };
`,
	);

const makeComponent = (componentName) =>
	createDirectory(
		'components',
		componentName,
		`
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const ${componentName} = ({ ...props }) => {
    return (
        <Text>Hello</Text>
    );
}

const styles = StyleSheet.create({

});

export { ${componentName} };
`,
	);

// begin script
const fileTypeToCreate = argv[2];
const newFilename = argv[3];

if (!fileTypeToCreate || !newFilename || fileTypeToCreate.includes('-h')) {
	// check if the developer has a file type, and a file name
	// node js console color reference: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
	console.log(
		'\n',
		'\x1b[43m',
		'\x1b[30m',
		"You need to specify the file's type, and the file's name.",
	);
	console.log('\x1b[0m', '\t-c = Component');
	console.log('\x1b[0m', '\t-v = View');
	console.log('\nExample');
	console.log('\tnode generate.js -c RoundButton\n');
	return;
}

switch (fileTypeToCreate) {
	case '-c':
	case '-component':
		return makeComponent(newFilename);
	case '-v':
	case '-view':
		return makeView(newFilename);
	default:
		console.log(
			'\nNothing was created, please check your parameters.',
			`\n\tnode generate.js ${fileTypeToCreate} ${newFilename}\n`,
		);
		return;
}
