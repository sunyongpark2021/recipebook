// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//   };
// };

// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"],
//   plugins: ["react-native-reanimated/plugin"], //I added this line because of the 1st error
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
