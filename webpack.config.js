const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode:"development",
    output:{
        filename:'app.bundle.js',
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new WebpackPwaManifestPlugin({
            name:'Petgram',
            shortname: 'Petgram 🐶',
            description:'Con petgram puedes encontrar fotos de animales domesticos',
            background_color:'#fff',
            theme_color:'#b1a',
            icons:[
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96,128,192,256,385,512]
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching:[
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com | images.unplash.com)'),
                    handler:'CacheFirst',
                    options:{
                        cacheName:'images'
                    }
                },
                {
                    urlPattern: new RegExp('https://petgram-server-gabriel-vargas.vercel.app/'),
                    handler:'NetworkFirst',
                    options:{
                        cacheName:'api'
                    }
                }
            ]
        })
    ],
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}