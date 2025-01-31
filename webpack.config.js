const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./index.js",
	mode: "development",

	// output: specifies where Webpack will put it's files after bundling and we specify the path and the file name of that Webpack bundle
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index_bundle.js",
		publicPath: "/",
	},

	// target: specifies where our app will run
	target: "web",
	devServer: {
		port: "2205",

		// static: specifies the directory webpack will use to serve static files
		static: {
			directory: path.join(__dirname, "public"),
		},

		// open: automatically open the browser after it had bundled our files
		open: {
			app: {
				name: "Google Chrome",
			},
		},

		// hot: enables webpack Hot module replacement exchanges, adds, or removes modules while an application is running, without a full reload to improve performance
		hot: true,

		// liveReload: automatically update the app as you make changes
		// liveReload: true,

		historyApiFallback: true,
	},

	// tells Webpack files to consider when building our app
	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},
	module: {
		// rules: tells Webpack thatm while building when it reaches file with .js or .jsx extensions, to use babel-loader on them
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"], // Loads CSS files and injects them into the DOM
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "images",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
};
