const linkedList = require('./linked-list');

// #0 Bubble Sort ---------------------------------------------------
// SLOWEST sorting algorithm
// swaps each value several times through array UNTIL
// output is reached which is the sorted array

function bubbleSort(array) {
  let numOfSwaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      numOfSwaps++;
    }
  }
  if (numOfSwaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

// #1 ---------------------------------------------------------------
// Merge Sort
// mergeSort (input data) into leftArr + rightArr
// Recursively sort leftArr and rightArr
// OUTPUT (merge(leftArr, rightArr) into the OUTPUT array) 

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  // console.log('left recursion: ' + left);
  let right = array.slice(middle, array.length);
  // console.log('right recursion: ' + right);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  // console.log('returning this array from merge: ');
  // console.log(array);
  return array;
}

// #2 ---------------------------------------------------------------
// Quicksort
// 1) {PARTITION} the [array] in 2 (hal|ves) around a MIDDLE (pivot) value
//   + All (values in [array] < pivot) go to FIRST HALF of the array,
//   + All (values in [array] > pivot) go to SECOND HALF of the array.
// 2) Recursively sort the two (hal|ves) of the array
// 3) STOP when the (hal|ves) are of length 0 or 1.

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  // console.log(array)
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    // console.log('on step i ' + i)
    // console.log('pivot ' + pivot)
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

// SWAP HELPER function ---------------------------------------------
// used in BUBBLE SORT + QUICK SORT
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}


// Linked List Helper Functions -------------------------------------
//
function display(list) {
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let counter = 1;
  if (list.head === null) {
    return null;
  }
  else {
    let tempNode = list.head;
    while (tempNode.next !== null) {
      counter ++;
      tempNode = tempNode.next;
    }
    return counter;
  }
}

// # 5 --------------------------------------------------------------
// Bucket Sort 

function bucketSort(array, min, max){
  let buckets = Array(max - min + 1);
  for (let i = 0; i < array.length; i++){
    buckets[ array[i] - min ] = (buckets[ array[i] - min] | 0) + 1;
  }
  let returnArray = [];
  for (let i = min; i <= max; i++) {
    for(let j = 0; j < buckets[i-min]; j++){
      returnArray.push(i);
    }
  }
  return returnArray;
}