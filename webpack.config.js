const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    entry: __dirname+'/src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle-[hash].js' //打包文件名
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        //contentBase: "./build",//本地服务器所加载的页面所在的目录
        //contentBase默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        //port 设置默认监听端口，如果省略，默认为”8080“
        //historyApiFallback: true,//不跳转
        //inline: true,//实时刷新
        //hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname+'/public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        }),
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    module: {
        loaders: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则式匹配
                loader: "babel-loader" //使用的加载器名称
                // query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                //     presets: ["env", "react","es2015"],
                //     plugins: ["react-hot-loader/babel"]
                // }
            },
            {
                test: /\.js$/,
                enforce: 'pre', //加载器的执行顺序，不设置为正常执行，pre（前）|post（后），eslint是检查代码规范，应该在编译前就执行
                loader: 'eslint-loader',
            },
            {
                test: /\.css/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer'),
                                require('precss'),
                                require('postcss-flexbugs-fixes')
                            ]
                        }
                    }
                ]
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                  limit: 10000, //1w字节以下大小的图片会自动转成base64
                },
            }
        ]
    }
}