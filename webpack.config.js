module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader'],
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' },
			{
				test: /\.(ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader',
			},
		],
	},
};
