import { expect } from 'chai'; 
import quickSort from '../scripts/quickSort';
import genRandNum from '../scripts/genRandNum';
import genRandLetter from '../scripts/genRandLetter';


describe('Quick Sort', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.function;
  });
  
  it('should sort positive and negative numbers', () => {
    var numbers = [ 5, 3, 2, 1, -4 ];
    var sorted = quickSort(numbers);
    
    expect(sorted).to.deep.equal([-4, 1, 2, 3, 5]);
  });
  
  it('should sort letters', () => {
    var letters = [ 'd', 'b', 'a', 'c' ];
    var sorted = quickSort(letters);
    
    expect(sorted).to.deep.equal([ 'a', 'b', 'c', 'd' ]);
  });
  
  it('should have the smallest number at the zero index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var returnArray = quickSort(randomArray);
    var min = Math.min(...randomArray);
    
    expect(returnArray[0]).to.equal(min);
  });
  
  it('should have the largest number at the largest index', () => {
    var randomArray = [ 5, 8, 2, 5, 8, 9, 1, 2 ];
    var returnArray = quickSort(randomArray);
    var max = Math.max(...randomArray);    
    
    expect(returnArray[randomArray.length - 1]).to.equal(max);
  });   
    
  it('should sort large number arrays', () => {
    var randomArray = genRandNum(200000);
    var sortedArray = [ ...randomArray ].sort( (a, b) => a - b );    
    
    expect(quickSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should sort large letter arrays', () => {
    var randomArray = genRandLetter(40000);
    var sortedArray = [...randomArray].sort();
    
    expect(quickSort(randomArray)).to.be.deep.equal(sortedArray);
  });
  
  it('should only accept arrays', () => {
    var input = {};
    
    expect(quickSort(input)).to.equal('Must input array with value(s)');
  });
});