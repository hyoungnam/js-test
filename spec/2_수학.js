(function() {
  'use strict';

  describe('수학', function() {

    describe('1. computeAreaOfATriangle', function() {
      it('TestCase 1', function() {
        expect(computeAreaOfATriangle(4, 6)).to.equal(12);
      }); 
      it('TestCase 2', function() {
        expect(computeAreaOfATriangle(10, 7)).to.equal(35);
      }); 
    });
    describe('2. computePower', function() {
      it('TestCase 1', function() {
        expect(computePower(2, 3)).to.equal(8);
      }); 
      it('TestCase 2', function() {
        expect(computePower(5, 0)).to.equal(1);
      }); 
      it('TestCase 3', function() {
        expect(computePower(2, 10)).to.equal(1024);
      }); 
    });
    describe('3. computePerimeterOfACircle', function() {
      it('TestCase 1', function() {
        expect(computePerimeterOfACircle(4)).to.equal(2 * 4 * Math.PI);
      }); 
      it('TestCase 2', function() {
        expect(computePerimeterOfACircle(1)).to.equal(2 * 1 * Math.PI);
      }); 
    });
    describe('3. computeAverageOfNumbers', function() {
      it('TestCase 1', function() {
        expect(computeAverageOfNumbers([1,2,3,4,5])).to.equal(3);
      }); 
      it('TestCase 2', function() {
        expect(computeAverageOfNumbers([2,4,10,15,9])).to.equal(8);
      }); 
    });


  });

}());
