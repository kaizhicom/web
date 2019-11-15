//导入路径处理模块,node.js自带核心模块，不需要安装
let path = require('path');
//导入分离css插件
let miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //development
    //production
    mode:'development',
    //入口文件

    entry : {
        app: './app/app.js'
    },
    //输出
    output : {
   //输出
        path: path.resolve(__dirname + '/build'),
        //打包输出文件重命名
        filename: '[name].min.js'
    },
    //配置loader
    //处理css,less
    module: {
        rules: [
            //每一个对象就是一个loader规则
            {
            test: /\.css$/,
            use:[
                // {loader:'style-loader'},
                //分离css
                {loader:miniCssExtractPlugin.loader},
                {loader:'css-loader'}
            ]
            },
            {
                test: /\.less$/,
                use:[
                    // {loader:'style-loader'},
                    {loader:miniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'less-loader'}

                ]
                }
        ]
    },
    //配置插件
    plugins:[
        new miniCssExtractPlugin({
         filename:'[name].min.css'   
        })
    ]
    
};