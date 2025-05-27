function selectionSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIdx]) minIdx = j;
    }
    [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
  }
  return sorted;
}

module.exports = { selectionSort };