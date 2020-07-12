// 接雨水问题

// 解法一，备忘录方式
function method1(arr) {
  let lefts = [];
  let rights = [];
  const len = arr.length;
  let result = 0;
  for(let i = 1; i < len - 1; i++ ) {
    lefts[i] = Math.max(arr[i], lefts[i - 1] || 0);
  }
  for(let j = len - 2; j >= 0; j--) {
    rights[j] = Math.max(arr[j], rights[j + 1] || 0);
  }
  for(let i = 1; i < len - 1; i++ ) {
    result += Math.min(lefts[i], rights[i]) - arr[i];
  }
  return result;
}

// 解法二，双指针方式
function method2(arr) {
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  let left_max = arr[left];
  let right_max = arr[right];
  let result = 0;
  while(left <= right) {
    left_max = Math.max(left_max, arr[left]);
    right_max = Math.max(right_max, arr[right]);
    if(left_max <= right_max) {
      result += left_max - arr[left];
      left++;
    } else {
      result += right_max - arr[right];
      right--;
    }
  }
  return result;
}

export default { method1, method2 }