import { expect } from 'chai'; 
import insertionSort from '../scripts/insertionSort';
import genRandNum from '../scripts/genRandNum';
import genRandLetter from '../scripts/genRandLetter';


describe('Insertion Sort', () => {
  it('should be a function', () => {
    expect(insertionSort).to.be.function;
  });
  
  it('should sort positive and negative numbers', () => {
    var numbers = [ 5, 3, 2, 1, -4 ];
    var sorted = insertionSort(numbers);
    
    expect(sorted).to.deep.equal([-4, 1, 2, 3, 5]);
  });
  
  it('should sort letters', () => {
    var letters = [ 'd', 'b', 'a', 'c' ];
    var sorted = insertionSort(letters);
    
    expect(sorted).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
  });
  
  it('should have the smallest number at the zero index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var min = Math.min(...randomArray);    
    
    insertionSort(randomArray);
    expect(randomArray[0]).to.equal(min);
  });
  
  it('should have the largest number at the largest index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var max = Math.max(...randomArray);    
    
    insertionSort(randomArray);
    expect(randomArray[randomArray.length - 1]).to.equal(max);
  });  
    
  it('should sort large number arrays', () => {
    var randomArray = genRandNum(14000);
    var sortedArray = [ ...randomArray ].sort( (a, b) => a - b );    
    
    expect(insertionSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should sort large letter arrays', () => {
    var randomArray = genRandLetter(13000);
    var sortedArray = [...randomArray].sort();
    
    expect(insertionSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should only accept arrays', () => {
    var input = {};
    
    expect(insertionSort(input)).to.equal('Must input array with value(s)');
  });
});