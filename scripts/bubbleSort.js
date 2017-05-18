var numbers = [ 9, 6, 3, 2, 1, 5 ];
// make length a variable?

function bubbleSort (array) {
  
  if (Array.isArray(array) && array.length > 0) {
    for (let i = 0, swap = true; i < array.length && swap; i++) {
      swap = false;
      // console.log(swap, array);
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap = true;
          [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
          
        }
      }
    }
  } else {
    return 'Must input array with value(s)';
  }
  
  return array;
}

bubbleSort(numbers);

export default bubbleSort;