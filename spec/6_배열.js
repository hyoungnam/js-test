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
    

  });

}());
