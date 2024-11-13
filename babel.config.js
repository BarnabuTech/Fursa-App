module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: ['react-native-reanimated/plugin'],
=======
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
>>>>>>> e5d8652 (authentication)
  };
};
