const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    module:    {
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
        ],
    },
    mode:'development',
};