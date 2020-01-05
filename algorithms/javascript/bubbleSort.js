const bubbleSort = (arr) => {
  const n = arr.length;

  // 一共要跑 n 輪
  for (let i = 0; i < n; i++) {

    // 從第一個元素開始，不斷跑到第 n - 1 - i 個
    // 原本是 n - 1，會再加上 - i 是因為最後 i 個元素已經排好了
    // 所以沒必要跟那些排好的元素比較
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}


console.log(bubbleSort([ 9, 5, 1, 10 ,3, 100, 55, 34, 69 ]))
