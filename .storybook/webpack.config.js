module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
  })

  config.module.rules.push({
    enforce: 'pre',
    test: /.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /(node_modules)/,
    options: {
      fix: true,
    },
  })

  return config
}
