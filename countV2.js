module.exports = (input) => {
  return input.reduce((acc, curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {});
};
