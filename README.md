# Search and Sort Algorithms for JavaScript

A lightweight JavaScript utility library containing popular **search** and **sort** algorithms. Great for learning, teaching, or quickly integrating classic algorithmic functionality into your project.

---

## ✨ Features

- 🔍 Search Algorithms:  
  - `binarySearch`
  - `linearSearch`
  - `exponentialSearch`

- 🔢 Sort Algorithms:  
  - `mergeSort`
  - `quickSort`
  - `insertionSort`
  - `selectionSort`

---

## 📦 Installation

```bash
npm install search-sort-kits
```

---

## 📚 Usage

```js
const {
  binarySearch,
  linearSearch,
  exponentialSearch,
  mergeSort,
  quickSort,
  insertionSort,
  selectionSort
} = require('kits');

// Example usage:
const arr = [1, 4, 6, 9, 13];

console.log(binarySearch(arr, 6)); // Output: 2
console.log(mergeSort([5, 2, 9, 1])); // Output: [1, 2, 5, 9]
```

---

## 🔍 API Reference

### 🔎 Search

- **binarySearch(arr, target)**  
  Returns the index of the target element using Binary Search.

- **linearSearch(arr, target)**  
  Returns the index of the target using Linear Search.

- **exponentialSearch(arr, target)**  
  Efficient for unbounded arrays. Returns the index of the target.

### 🔢 Sort

- **mergeSort(arr)**  
  Returns a new array sorted using Merge Sort.

- **quickSort(arr)**  
  Returns a new array sorted using Quick Sort.

- **insertionSort(arr)**  
  Returns a new array sorted using Insertion Sort.

- **selectionSort(arr)**  
  Returns a new array sorted using Selection Sort.

---

## 📂 File Structure

```
├kits/
  ├── binarySearch.js
  ├── exponentialSearch.js
  ├── insertionSort.js
  ├── linearSearch.js
  ├── mergeSort.js
  ├── quickSort.js
  ├── selectionSort.js
├ index.js          # Exports all functions
└ package.json
```

---

## 🧑‍💻 Author

Made with 💙 by Prem Chavan

---

## 📄 License

ISC