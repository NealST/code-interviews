// 寻找素数
// 给定数字n，返回2到n之间的素数个数以及对应素数

function getPrime(n) {
  if (n < 3) {
    return -1
  }

  const primes = new Array(n);
  primes.fill(true);
  let results = [];

  for(let i = 2; i * i < n; i++) {
    // 如果当前数是素数，那么相乘之后的数字就肯定不是素数
    if (primes[i]) {
      for(j = i * i; j < n; j += i) {
        primes[j] = false
      }
    }
  }

  for(let i = 2; i < n; i++) {
    if(primes[i]) {
      results.push(i);
    }
  }

  return results;
}

export default getPrime