
var webpack = require( 'webpack'),
    path = require( 'path'),
    isDev = true;

var config = {
    entry: {
        index: './build/components/containers/Index.jsx'
    },
    output: {
        path: path.resolve( __dirname, './dist/js' ),
        filename: '[name].bundle.js'
        //chunkFilename: '[id].chunk.js',
        //publicPath: 'https://www.baidu.com/'    //todo
    },
    resolve: {
        extensions: [ '', '.js', '.jsx', '.less' ]
    },
    watch:true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
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
        new webpack.OldWatchingPlugin()
    ]
};

if(!isDev) {
    config.plugins.push(
        //压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    config.plugins.push(
        //definePlugin 接收字符串插入到代码当中,
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