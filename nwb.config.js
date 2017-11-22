module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'yes',
      externals: {
        react: 'React'
      }
    }
  }
}
