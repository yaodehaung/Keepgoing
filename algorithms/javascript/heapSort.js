function heapSort = (arr) => {  
  function heapify(arr, length, node) {
    const left = node * 2 + 1;
    const right = node * 2 + 2;

    // 先預設最大的節點是自己
    let max = node;

    if (left < length && arr[left] > arr[max]) {
      max = left;
    }

    if (right < length && arr[right] > arr[max]) {
      max = right;
    }

    // 如果左右兩邊有任何一個比 node 大的話
    if (max !== node) {
      // 就把兩個互換
      [arr[node], arr[max]] = [arr[max], arr[node]];

      // 接著繼續 heapfiy
      heapify(arr, length, max);
    }
  }

  // build max heap
  const length = arr.length;
  for (let i = Math.floor(length / 2) - 1; i>=0; i--) {
    heapify(arr, length, i);
  }

  // 排序
  for (let i = length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
