const { binarySearch } = require('./kits/binarySearch.js');
const { exponentialSearch } = require('./kits/exponentialSearch.js');
const { insertionSort } = require('./kits/insertionSort.js');
const { linearSearch } = require('./kits/linearSearch.js');
const { mergeSort } = require('./kits/mergeSort.js');
const { quickSort } = require('./kits/quickSort.js');
const { selectionSort } = require('./kits/selectionSort.js');

module.exports = {
    binarySearch,
    linearSearch,
    exponentialSearch,
    mergeSort,
    quickSort,
    insertionSort,
    selectionSort,
};
