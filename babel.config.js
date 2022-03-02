module.exports = {
  presets: [['@vue/app', { useBuildIns: 'entry' }]],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
