const webpack = require("webpack")

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    "@svgr/webpack"
                ]
            },
            {
                use: ['less-loader','style-loader', 'css-loader'],
                test: /\.less$/
                }
        ]
    }
}