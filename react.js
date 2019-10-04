module.exports = {
  extends: [
    './index',
    './plugins/react',
    './plugins/jsx-a11y'
  ].map((path) => require.resolve(path))
};
