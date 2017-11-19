const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: './src/svg-anim.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'svgAnim.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../json/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            files: ['./dist/*']
        })
    ],
    watch: true,
    devtool: 'source-map'
}
