// ----- Pseudocode -----
// Starting with index i = 1, compare array[i] to array[i - 1]
// if array[i] < array[i - 1] then switch the two, then compare new position 
// to new array[i - 1],
  // else end
// Increment index and repeat
// until sorted...

var numbers = [ 5, 4, 3, 2, 1 ];

var insertionSort = array => {
  
  if (Array.isArray(array) && array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      
      if (array[i] < array[i - 1]) {
        
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        i -= 2;
      }
    }
    
    return array;
    
  } else {
    return 'Must input array with value(s)';
  }
}

insertionSort(numbers);

export default insertionSort;