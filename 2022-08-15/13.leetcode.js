/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; ++i) {
    const curr = romanToIntMap[s[i]];
    const next = romanToIntMap[s[i + 1]];

    if (curr < next) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
}
