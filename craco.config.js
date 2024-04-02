const { webpack } = require('@craco/craco');

module.exports = {
	webpack: {
	  configure: (webpackConfig) => {
		webpackConfig.resolve.fallback = {
		  ...webpackConfig.resolve.fallback,
		  "crypto": require.resolve("crypto-browserify"),
		};
		// webpackConfig.plugins.push(
		// 	new webpack.ProvidePlugin({
		// 		process: 'process/browser',
		// 	})
		// 	);
  
		return webpackConfig;
	  },
	},
  };