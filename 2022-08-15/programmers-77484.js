/**
 * @param {number[]} lottos
 * @param {number[]} win_nums
 */
function solution(lottos, win_nums) {
  let countMatched = 0;
  let countZero = 0;

  lottos.forEach((choice) => {
    if (choice === 0) countZero++;
  });

  for (const choice of lottos) {
    if (win_nums.includes(choice)) countMatched++;
  }

  return [
    countMatchedToRank(countMatched + countZero),
    countMatchedToRank(countMatched),
  ];
}

function countMatchedToRank(count) {
  return count >= 2 ? 7 - count : 6;
}
