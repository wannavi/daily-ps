function solution(ids, reports, k) {
  const reportsSet = new Set(reports);
  const idsValueIndexMap = createValueIndexMap(ids);

  const reportInverseMap = {};
  const sendMailCount = Array(ids.length).fill(0);

  for (const report of reportsSet) {
    const [reporter, reported] = report.split(" ");

    if (reported in reportInverseMap) {
      reportInverseMap[reported].push(reporter);
    } else {
      reportInverseMap[reported] = [reporter];
    }
  }

  for (const reported in reportInverseMap) {
    const reporters = reportInverseMap[reported];

    if (reporters.length >= k) {
      for (const reporter of reporters) {
        sendMailCount[idsValueIndexMap[reporter]]++;
      }
    }
  }

  return sendMailCount;
}

function createValueIndexMap(arr) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = i;
  }

  return hashMap;
}
