const path = require('path');

module.exports = {
 entry: './home/dulc3/site/Index/React/app.js', // Replace with the path to your main JavaScript file
 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled file
 },
 module: {
    rules: [
      {
        test: /\.js$/, // Matches .js files
        exclude: /node_modules/, // Excludes node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
          },
        },
      },
    ],
 },
 resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
 },
 devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
    compress: true, // Enable gzip compression
    port: 9000, // Port for the development server
 },
};
