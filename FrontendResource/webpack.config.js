/**
 * Created by sun yi on 2016/6/12.
 */

var webpack = require( 'webpack'),
    path = require( 'path'),
    isDev = false;

var config = {
    entry: {
        index: './build/components/containers/Index.jsx',
        order: './build/components/containers/Order.jsx',
        paidWords: './build/components/containers/PaidWords.jsx',
        query: './build/components/containers/Query.jsx',
        nameAnalysis: './build/components/containers/NameAnalysis.jsx'
    },
    output: {
        path: path.resolve( __dirname, '../assets/js' ),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: 'https://www.baidu.com/'    //todo
    },
    resolve: {
        extensions: [ '', '.js', '.jsx', '.less' ]
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
         name: 'common',
         filename: 'common.js',
         chunks: [
         'index',
         'masterIntro',
         'query',
         'order',
         'pay'
         ]
         })*/
    ]
};

if(!isDev) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
} else {
    config.devtool = 'source-map';
}

module.exports = config;