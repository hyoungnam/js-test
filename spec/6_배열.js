(function() {
  'use strict';

  describe('배열', function() {

    describe('1. getFirstElement', function() {
      it('TestCase 1', function() {
        expect(getFirstElement([1, 2, 3, 4, 5])).to.equal(1);
      }); 
      it('TestCase 2', function() {
        expect(getFirstElement(['a', 'b', 'c', 'd', 'e'])).to.equal('a');
      }); 
      it('TestCase 3', function() {
        expect(getFirstElement(['1', 2, '3', 4, '5'])).to.equal('1');
      }); 
      it('TestCase 4', function() {
        expect(getFirstElement([])).to.equal(undefined);
      }); 
    });

    describe('2. getLastElement', function() {
      it('TestCase 1', function() {
        expect(getLastElement([1, 2, 3, 4])).to.equal(4);
      }); 
      it('TestCase 2', function() {
        expect(getLastElement(['a', 'b', 'c', 'd', 'e'])).to.equal('e');
      }); 
      it('TestCase 3', function() {
        expect(getLastElement(['1', 2, '3', 4, 5])).to.equal(5);
      }); 
      it('TestCase 4', function() {
        expect(getLastElement([])).to.equal(undefined);
      }); 
    });

    describe('3. getNthElement', function() {
      it('TestCase 1', function() {
        expect(getLastElement([1, 2, 3, 4])).to.equal(4);
      }); 
      it('TestCase 2', function() {
        expect(getLastElement(['a', 'b', 'c', 'd', 'e'])).to.equal('e');
      }); 
      it('TestCase 3', function() {
        expect(getLastElement(['1', 2, '3', 4, 5])).to.equal(5);
      }); 
      it('TestCase 4', function() {
        expect(getLastElement([])).to.equal(undefined);
      }); 
    });

    describe('3. getNthElement', function() {
      it('TestCase 1', function() {
        expect(getNthElement([1, 2, 3, 4], 2)).to.equal(3);
      }); 
      it('TestCase 2', function() {
        expect(getNthElement(['a', 'b', 'c', 'd', 'e'], 4)).to.equal('e');
      }); 
      it('TestCase 3', function() {
        expect(getNthElement(['1', 2, '3', 4, 5], 3)).to.equal(4);
      }); 
      it('TestCase 4', function() {
        expect(getNthElement([])).to.equal(undefined);
      }); 
    });

    describe('4. addToBack', function() {
      it('TestCase 1', function() {
        expect(addToFront([1, 2], 3)).to.eql([3,1,2]);
      }); 
      it('TestCase 2', function() {
        expect(addToFront(['a', 'b', 'c', 'd'], 'e')).to.eql(['e', 'a', 'b', 'c', 'd']);
      }); 
      it('TestCase 3', function() {
        expect(addToFront(['1', 2, '3', 4, 5], 3)).to.eql([3, '1', 2, '3', 4, 5]);
      }); 
      it('TestCase 4', function() {
        expect(addToFront([], '2')).to.eql(['2']);
      }); 
    });

    describe('05_addToBack', function() {
      it('TestCase 1', function() {
        expect(addToBack([1, 2], 3)).to.eql([1,2,3]);
      }); 
      it('TestCase 2', function() {
        expect(addToBack(['a', 'b', 'c', 'd'], 'e')).to.eql(['a', 'b', 'c', 'd', 'e']);
      }); 
      it('TestCase 3', function() {
        expect(addToBack(['1', 2, '3', 4, 5], 3)).to.eql(['1', 2, '3', 4, 5, 3]);
      }); 
      it('TestCase 4', function() {
        expect(addToBack([], '2')).to.eql(['2']);
      }); 
    });

    describe('06_joinArrays', function() {
      it('TestCase 1', function() {
        expect(joinArrays([1, 2], [3,4])).to.eql([1, 2, 3, 4]);
      }); 
      it('TestCase 2', function() {
        expect(joinArrays(['a', 'b', 'c', 'd'], ['e'])).to.eql(['a', 'b', 'c', 'd', 'e']);
      }); 
      it('TestCase 3', function() {
        expect(joinArrays(['1', 2, '3', 4, 5], [3, 't', true])).to.eql(['1', 2, '3', 4, 5, 3, 't', true]);
      }); 
      it('TestCase 4', function() {
        expect(joinArrays([], ['2'])).to.eql(['2']);
      }); 
    });

    describe('07_getElementsAfter', function() {
      it('TestCase 1', function() {
        const arr = ['a', 'b', 'c', 'd', 'e']
        expect(getElementsAfter(arr, 2)).to.eql(['d', 'e']).not.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(getElementsAfter(arr, 0)).to.eql(['b', 'c', 'd']).not.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, 5]
        expect(getElementsAfter(arr, 3)).to.eql([5]).not.equal(arr);
      }); 
    });

    describe('08_getElementsUpTo', function() {
      it('TestCase 1', function() {
        const arr = ['a', 'b', 'c', 'd', 'e']
        expect(getElementsUpTo(arr, 3)).to.eql(['a', 'b', 'c']).not.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(getElementsUpTo(arr, 0)).to.eql([]).not.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, 5]
        expect(getElementsUpTo(arr, 1)).to.eql(['1']).not.equal(arr);
      }); 
    }); 

    describe('09_getAllElementsButFirst', function() {
      it('TestCase 1', function() {
        expect(getAllElementsButFirst([1, 2, 3, 4])).to.eql([2, 3, 4]);
      }); 
      it('TestCase 2', function() {
        expect(getAllElementsButFirst(['a', 'b', 'c', 'd'])).to.eql(['b', 'c', 'd']);
      }); 
      it('TestCase 3', function() {
        expect(getAllElementsButFirst(['1', 2, '3', 4, false])).to.eql([2, '3', 4, false]);
      }); 
    });
    
    describe('10_getAllElementsButLast', function() {
      it('TestCase 1', function() {
        expect(getAllElementsButLast([1, 2, 3, 4])).to.eql([1, 2, 3]);
      }); 
      it('TestCase 2', function() {
        expect(getAllElementsButLast(['a', 'b', 'c', 'd'])).to.eql(['a', 'b', 'c']);
      }); 
      it('TestCase 3', function() {
        expect(getAllElementsButLast(['1', 2, '3', 4, false])).to.eql(['1', 2, '3', 4]);
      }); 
    });
    
    describe('11_removeFromFront', function() {
      it('TestCase 1', function() {
        const arr = [1, 2, 3, 4]
        expect(removeFromFront(arr)).to.eql([2,3,4]).to.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(removeFromFront(arr)).to.eql(['b', 'c', 'd']).to.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, false]
        expect(removeFromFront(arr)).to.eql([2, '3', 4, false]).to.equal(arr);
      }); 
    });

    describe('12_removeFromBack', function() {
      it('TestCase 1', function() {
        const arr = [1, 2, 3, 4]
        expect(removeFromFront(arr)).to.eql([2,3,4]).to.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(removeFromFront(arr)).to.eql(['b', 'c', 'd']).to.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, false]
        expect(removeFromFront(arr)).to.eql([2, '3', 4, false]).to.equal(arr);
      }); 
    });
    describe('13_removeFromBackOfNew', function() {
      it('TestCase 1', function() {
        const arr = [1, 2, 3]
        expect(removeFromBackOfNew(arr)).to.eql([1,2]).not.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(removeFromBackOfNew(arr)).to.eql(['a', 'b', 'c']).not.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, false]
        expect(removeFromBackOfNew(arr)).to.eql(['1', 2, '3', 4]).not.equal(arr);
      }); 
    });

    describe('14_addToBackOfNew', function() {
      it('TestCase 1', function() {
        const arr = [1, 2, 3]
        expect(addToBackOfNew(arr, 4)).to.eql([1,2,3,4]).not.equal(arr);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'b', 'c', 'd']
        expect(addToBackOfNew(arr, 'e')).to.eql(['a', 'b', 'c', 'd','e']).not.equal(arr);
      }); 
      it('TestCase 3', function() {
        const arr = ['1', 2, '3', 4, false]
        expect(addToBackOfNew(arr, true)).to.eql(['1', 2, '3', 4, false, true]).not.equal(arr);
      }); 
    });

    describe('16_joinArrayOfArrays', function() {
      it('TestCase 1', function() {
        expect(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])).to.eql([1,4,true, false, 'x', 'y']);
      }); 
      it('TestCase 2', function() {
        expect(joinArrayOfArrays([[1,5,7], [], [5,7], [1]])).to.eql([1,5,7,5,7,1]);
      }); 
    });

    describe('17_getAllElementsButNth', function() {
      it('TestCase 1', function() {
        expect(getAllElementsButNth(['a', 'b', 'c'], 1)).to.eql(['a', 'c']);
      }); 
      it('TestCase 2', function() {
        expect(getAllElementsButNth([1, 2, 3, 4, 5], 0)).to.eql([2, 3, 4, 5]);
      }); 
      it('TestCase 3', function() {
        expect(getAllElementsButNth([1, '2', true, 4, '3'], 2)).to.eql([1, '2', 4, '3']);
      }); 
    });
    describe('18_getAllLetters', function() {
      it('TestCase 1', function() {
        expect(getAllLetters('Radagast')).to.eql(['R', 'a', 'd', 'a', 'g', 'a', 's', 't']);
      }); 
      it('TestCase 2', function() {
        expect(getAllLetters('')).to.eql([]);
      }); 
    });

    describe('19_getAllWords', function() {
      it('TestCase 1', function() {
        expect(getAllWords('Radagast the Brown')).to.eql(['Radagast', 'the', 'Brown']);
      }); 
      it('TestCase 2', function() {
        expect(getAllWords('')).to.eql([]);
      }); 
    });

    describe('20_findShortestWordAmongMixedElements', function() {
      it('TestCase 1', function() {
        expect(findShortestWordAmongMixedElements([4, 'two', 2, 'three'])).to.equal('two');
      }); 
      it('TestCase 2', function() {
        expect(findShortestWordAmongMixedElements(['eight', 'two', 'four', 'three', 'five', 'six', 'seven'])).to.equal('two');
      }); 
      it('TestCase 3', function() {
        expect(findShortestWordAmongMixedElements(['eight', 1, 4, 'three', 'five', 'six', 7, 'one', 2])).to.equal('six');
      }); 
      it('TestCase 4', function() {
        expect(findShortestWordAmongMixedElements([])).to.equal('');
      }); 
      it('TestCase 5', function() {
        expect(findShortestWordAmongMixedElements([1,2,true,4,false])).to.equal('');
      }); 
    });

    describe('21_removeElement', function() {
      it('TestCase 1', function() {
        expect(removeElement([1, 2, 3, 2, 1], 2)).to.eql([1, 3, 1]);
      }); 
      it('TestCase 2', function() {
        expect(removeElement([1, 2, 'banana', 'apple', 'apple', 9, 'orange'], 'apple')).to.eql([1, 2, 'banana', 9, 'orange']);
      }); 
      it('TestCase 3', function() {
        expect(removeElement([1, 4, 3, 4, 5, 7], 2)).to.eql([1, 4, 3, 4, 5, 7]);
      }); 
    });
    describe('22_keep', function() {
      it('TestCase 1', function() {
        expect(keep([1, 2, 3, 2, 1], 2)).to.eql([2, 2]);
      }); 
      it('TestCase 2', function() {
        expect(keep([1, 2, 'banana', 'apple', 'apple', 9, 'orange'], 'apple')).to.eql(['apple', 'apple']);
      }); 
      it('TestCase 3', function() {
        expect(keep([1, 4, 3, 4, 5, 7], 2)).to.eql([]);
      }); 
    });
    
    describe('23_findSmallestElement', function() {
      it('TestCase 1', function() {
        expect(findSmallestElement([4, 1, 9, 10])).to.equal(1);
      }); 
      it('TestCase 2', function() {
        expect(findSmallestElement([1, 2, 0, 9, 2])).to.equal(0);
      }); 
      it('TestCase 3', function() {
        expect(findSmallestElement([-5, 2, 0, -9, 5])).to.equal(-9);
      }); 
      it('TestCase 4', function() {
        expect(findSmallestElement([])).to.equal(0);
      }); 
    });
    describe('24_computeSumOfAllElements', function() {
      it('TestCase 1', function() {
        expect(computeSumOfAllElements([1, 2, 3])).to.equal(6);
      }); 
      it('TestCase 2', function() {
        expect(computeSumOfAllElements([0, -1, 5, 6, -2])).to.equal(8);
      }); 
    });
    describe('25_computeProductOfAllElements', function() {
      it('TestCase 1', function() {
        expect(computeProductOfAllElements([2, 5, 6])).to.equal(60);
      }); 
      it('TestCase 2', function() {
        expect(computeProductOfAllElements([0, -1, 5, 6, -2])).to.equal(0);
      }); 
      it('TestCase 3', function() {
        expect(computeProductOfAllElements([])).to.equal(0);
      }); 
    });
    describe('26_getLengthOfLongestElement', function() {
      it('TestCase 1', function() {
        expect(getLengthOfLongestElement(['one', 'two', 'three'])).to.equal(5);
      }); 
      it('TestCase 2', function() {
        expect(getLengthOfLongestElement(['apple', 'orange', 'banana', 'kiwi', 'berry', 'grape', 'plum'])).to.equal(6);
      }); 
      it('TestCase 3', function() {
        expect(getLengthOfLongestElement([])).to.equal(0);
      }); 
    });

    describe('27_getLongestElement', function() {
      it('TestCase 1', function() {
        expect(getLongestElement(['one', 'two', 'three'])).to.equal('three');
      }); 
      it('TestCase 2', function() {
        expect(getLongestElement(['apple', 'kiwi', 'orange', 'banana', 'berry', 'grape', 'plum'])).to.equal('orange');
      }); 
      it('TestCase 3', function() {
        expect(getLongestElement([])).to.equal('');
      }); 
    });
    
    describe('28_filterOddLengthWords', function() {
      it('TestCase 1', function() {
        expect(getLongestElement(['one', 'two', 'three'])).to.equal('three');
      }); 
      it('TestCase 2', function() {
        expect(getLongestElement(['apple', 'kiwi', 'orange', 'banana', 'berry', 'grape', 'plum'])).to.equal('orange');
      }); 
      it('TestCase 3', function() {
        expect(getLongestElement([])).to.equal('');
      }); 
    });

    
    

  });

}());
