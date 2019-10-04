module.exports = {
  extends: [
    './rules/best-practices',
    './rules/possible-errors',
    './rules/strict',
    './rules/variables',
    './rules/node-and-common',
    './rules/stylistic',
    './rules/es6'
  ].map((path) => require.resolve(path))
};
