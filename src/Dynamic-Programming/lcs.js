// 最长公共子序列问题

function getLcs(str1, str2) {
  const lenMap = new Map();

  function lcsLen(i, j) {
    const theKey = `${i}-${j}`;
    const theValue = lenMap.get(theKey);
    if (i === -1 || j === -1) {
      return 0
    }
    if (theValue) {
      return theValue
    }
    if (str1[i] === str2[j]) {
      return lcsLen(i - 1, j - 1) + 1;
    } else {
      return Math.max(lcsLen(i - 1, j), lcsLen(i, j - 1));
    }
  }

  return lcsLen(str1.length - 1, str2.length - 1);
}

export default getLcs;