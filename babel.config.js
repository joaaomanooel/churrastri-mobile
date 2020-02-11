module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/root': '.',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/screens': './src/screens',
            '@/helpers': './src/helpers',
            '@/assets': './src/assets',
            '@/i18n': './src/i18n',
            '@/redux': './src/redux',
            '@/sagas': './src/redux',
            '@/services': './src/redux',
          },
        },
      ],
    ],
    env: { production: { plugins: ['transform-remove-console'] } },
  };
};
