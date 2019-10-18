module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-media-minmax': {},
    'postcss-nested': {},
    precss: {},
    'postcss-easy-import': {
      extensions: [
        '.sss',
      ],
    },
    'css-mqpacker': true,
    autoprefixer: {
      grid: 'autoplace',
    },
  },
};
