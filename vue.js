module.exports = {
  extends: [
    ...['./index'].map((path) => require.resolve(path)),
    'plugin:vue/recommended'
  ]
};
