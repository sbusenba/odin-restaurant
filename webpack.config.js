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
        ],
    },
};