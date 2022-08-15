var romanToInt = (s) => {
  const hashMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const _1 = hashMap[s[i]];
    const _2 = hashMap[s[i + 1]];

    if (_1 < _2) {
      result += _2 - _1;
      i++;
    } else {
      result += _1;
    }
  }

  return result;
};
