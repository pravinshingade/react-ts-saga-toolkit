module.exports = {
	presets: [
		['@babel/preset-env', { targets: 'defaults' }],
		['@babel/preset-react', { runtime: 'automatic' }],
		'@babel/preset-typescript',
	],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		['@babel/plugin-proposal-private-methods', { loose: true }],
		['@babel/plugin-proposal-private-property-in-object', { loose: true }],
	],
};
