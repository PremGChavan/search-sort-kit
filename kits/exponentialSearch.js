function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;
  let i = 1;
  while (i < arr.length && arr[i] <= target) i *= 2;
  return binarySearch(arr.slice(i / 2, Math.min(i, arr.length)), target);
}

module.exports = { exponentialSearch };