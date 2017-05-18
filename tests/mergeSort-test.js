import { expect } from 'chai'; 
import mergeSort from '../scripts/mergeSort';
import genRandNum from '../scripts/genRandNum';
import genRandLetter from '../scripts/genRandLetter';


describe('Merge Sort', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.function;
  });
  
  it('should sort positive and negative numbers', () => {
    var numbers = [ 5, 3, 2, 1, -4 ];
    var sorted = mergeSort(numbers);
    
    expect(sorted).to.deep.equal([-4, 1, 2, 3, 5]);
  });
  
  it('should sort letters', () => {
    var letters = [ 'd', 'b', 'a', 'c' ];
    var sorted = mergeSort(letters);
    
    expect(sorted).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
  });
  
  it('should have the smallest number at the zero index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var returnArray = mergeSort(randomArray);
    var min = Math.min(...randomArray);
    
    expect(returnArray[0]).to.equal(min);
  });
  
  it('should have the largest number at the largest index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var returnArray = mergeSort(randomArray);
    var max = Math.max(...randomArray);    
    
    expect(returnArray[randomArray.length - 1]).to.equal(max);
  });  
    
  it('should sort large number arrays', () => {
    var randomArray = genRandNum(125000);
    var sortedArray = [ ...randomArray ].sort( (a, b) => a - b );    
    
    expect(mergeSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should sort large letter arrays', () => {
    var randomArray = genRandLetter(125000);
    var sortedArray = [...randomArray].sort();
    
    expect(mergeSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should only accept arrays', () => {
    var input = {};
    
    expect(mergeSort(input)).to.equal('Must input array with value(s)');
  });
});