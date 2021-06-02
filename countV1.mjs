export function countWordsV1(inputWords) {
  return inputWords.reduce((acc, curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {});
}

// module.exports = countWords
