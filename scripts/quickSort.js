// Pseudocode
// With pivot @ index = array.length - 1, 
//  check from array[0] if the value is larger, if it is, swap
// Pivot stays with the original number, 
//  check from array[length - 1] if the value is smaller, if it is, swap
// When the original pivot is in it's final position, recurse from
//  from right most element of elements to the left as well as the right

var numbers = [ 9, 4, 6, 2, 3, 7, 1, 8, 5 ];

var quickSort = (array) => {
  if (Array.isArray(array)) {
    let left = [];
    let right = [];
    let pivotVal = array[0];
    
    if (array.length < 2) {
      return array;
    }
    
    for (let i = 1; i < array.length; i++) {
      if (pivotVal > array[i]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    
    left = quickSort(left);
    right = quickSort(right);
    
    return [...left, pivotVal, ...right];
    
  } else {
    return 'Must input array with value(s)';
  }
}

quickSort(numbers);

export default quickSort;