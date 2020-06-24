// 编辑距离问题
// 给定两个字符串，s1与s2, 要求计算出将s1转换成s2所使用的最小操作数以及操作步骤
// 字符串可以对单个字符进行插入，删除，替换的操作

function minDistanceMap(s1, s2) {
  // 解法一：直接基于递归和备忘录编写
  const i = s1.length - 1;
  const j = s2.length - 1;
  const dpMap = new Map();

  function dp1(i, j) {
    const theKey = `${i}-${j}`;
    const theValue = dpMap.get(theKey);
    if (theValue) {
      return theValue;
    }
    if (i === -1) {
      return j + 1;
    }
    if (j === -1) {
      return i + 1;
    }
    let result;
    if (s1[i] === s2[j]) {
      result = dp1(i - 1, j - 1)
    } else {
      result = Math.min(
        dp1(i, j - 1) + 1,
        dp1(i - 1, j) + 1,
        dp1(i - 1, j - 1) + 1
      )
    }
    dpMap.set(theKey, theValue);
    return result;
  }
  
  return dp1(i, j);
}

function minDistanceTable(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dpTable = new Array(m + 1);
  for(let i = 0; i <= m; i++) {
    dpTable[i] = [];
    dpTable[i][0] = i;
  }
  for(let j = 0; j <= n; j++) {
    dpTable[0][j] = j;
  }
  // 自底向上求解
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j<= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dpTable[i][j] = dpTable[i - 1][j - 1];
      } else {
        dpTable[i][j] = Math.min(
          dpTable[i][j - 1] + 1,
          dpTable[i - 1][j] + 1,
          dpTable[i - 1][j - 1] + 1
        )
      }
    }
  }

  return dpTable[m][n];
}

export { minDistanceMap, minDistanceTable };


