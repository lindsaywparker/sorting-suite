// Pseudocode
// Split the array in half (rounding down on the index), 
// over and over again until
//   each baby array only has one item
// Merge two arrays at a time, always taking the smallest number from either 
// array

var numbers = [ 5, 2, 7, 3, 8, 6, 1, 4 ];

// ----- MERGE SORT ----- //
var mergeSort = (array) => {
  
  if (Array.isArray(array) && array.length > 0) {
    if (array.length === 1) {
      return array;
    }
    
    let arr1 = array.slice(0, array.length / 2);
    let arr2 = array.slice(array.length / 2);
    
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return merge(arr1, arr2);
    
  } else {
    
    return 'Must input array with value(s)';
  }
}

// ----- MERGE ----- //
var merge = ( arr1, arr2 ) => {
  let mergedArray = [];

  while (arr1.length && arr2.length) {
    let next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    
    mergedArray.push(next);
  }

  mergedArray = mergedArray.concat(arr1).concat(arr2);
  
  return mergedArray;
}
  
mergeSort(numbers);

export default mergeSort;