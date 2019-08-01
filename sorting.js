const linkedList = require('./linked-list')

// #0 Bubble Sort ---------------------------------------------------
// SLOWEST sorting algorithm
// swaps each value several times through array UNTIL
// output is reached which is the sorted array

function bubbleSort(array) {
  let numOfSwaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      _swap(array, i, i + 1);
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
  // console.log('returing this array from merge: ');
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
};
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
};

// SWAP HELPER function ---------------------------------------------
// used in BUBBLE SORT + QUICK SORT
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function display(list) {
  let currNode = list.head
  if (!list.head) {
    return null
  }

  while (currNode !== null) {
    console.log(currNode.value)
    currNode = currNode.next
  }
}

function main() {

  const input1 = [3, 9, 1, 14, 17, 24, 22, 20]
  const input2 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
  const input3 = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
  
  let array3 = input3.split(' ')
  array3 = array3.map(item => parseInt(item))
  let array2 = [];
  for (let i = 6000; i > 0; i--) {
    array2.push(i);
  }
  // console.log(mergeSort(input1));
  // console.log(bubbleSort(array2));
  // console.log(quickSort(array2));

  const SLL = new linkedList()
  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')

  display(SLL)

}

main();