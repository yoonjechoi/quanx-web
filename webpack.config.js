module.exports = {
    entry: {
        main: './src/js/entry.js'
    },

    output: {
        filename: 'dist/bundle.js',
    },

    resolve: {
        modules: ['node_modules', 'src/js', 'src/css'],
        extensions: ['.js', '.css']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader : 'babel-loader',
                        options: {
                            presets:[[
                                'env', { targets:{ browsers: [
                                    'last 2 versions'
                                ]} }
                            ]]

                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

}
