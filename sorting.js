// Sorting Algorithms 
//
// 
const input1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2 );

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
    if(left[leftIndex] < right[rightIndex]) {
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
  console.log('returing this array from merge: ')
  console.log(array)
  return array;
}

console.log(mergeSort(input1));

