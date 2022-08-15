const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

/**
 * @param {string} s
 */
const solution = (s) => {
  let result = s;

  for (const [index, word] of words.entries())
    result = result.split(word).join(index);

  return Number(result);
};
