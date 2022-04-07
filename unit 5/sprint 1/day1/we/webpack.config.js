
const path=require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"

    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              // [style-loader](/loaders/style-loader)
              { loader: 'style-loader' },
              // [css-loader](/loaders/css-loader)
              {
                loader: 'css-loader',
               
              },
              // [sass-loader](/loaders/sass-loader)
             
            ]
          }
        ]
    }
}