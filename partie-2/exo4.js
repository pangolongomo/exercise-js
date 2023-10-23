function findLargest(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr[arr.length - 1]);
}

const largest = findLargest([1, 13, 5, 4]);

console.log(largest);
