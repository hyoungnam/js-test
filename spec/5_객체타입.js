(function() {
  'use strict';

  describe('객체, 타입', function() {

    describe('1. removeStringValues', function() {
      it('TestCase 1', function() {
        let obj = {
          name: 'Sam',
          age: 20
        }
        expect(removeStringValues(obj)).to.eql({ age: 20 });
      }); 
      it('TestCase 2', function() {
        let obj = {
          height: 164,
          age: 20
        }
        expect(removeStringValues(obj)).to.eql({ height: 164, age: 20 });
      }); 
      it('TestCase 3', function() {
        let obj = {
          name: 'Sam',
          age: 20,
          address: 'seoul',
          securityNumber: '920329'
        }
        expect(removeStringValues(obj)).to.eql({ age: 20 });
      }); 
    });
    describe('2. removeNumberValues', function() {
      it('TestCase 1', function() {
        let obj = {
          a: 2,
          b: 'remaining',
          c: 4
        };
        expect(removeNumberValues(obj)).to.eql({ b: 'remaining' });
      }); 
      it('TestCase 2', function() {
        let obj = {
          a: '2',
          b: 'remaining',
          c: '4'
        };
        expect(removeNumberValues(obj)).to.eql({ a: '2', b: 'remaining', c: '4' });
      }); 

    });
    describe('3. removeArrayValues', function() {
      it('TestCase 1', function() {
        let obj = {
          a: [1, 3, 4],
          b: 2,
          c: ['hi', 'there']
        }
        expect(removeArrayValues(obj)).to.eql({ b: 2 });
      }); 
      it('TestCase 2', function() {
        let obj = {
          a: [],
          b: [undefined, undefined],
          c: 'case',
        }
        expect(removeArrayValues(obj)).to.eql({ c: 'case' });
      }); 
      it('TestCase 3', function() {
        let obj = {
          a: 1,
          b: 2,
          c: 3
        }
        expect(removeArrayValues(obj)).to.eql({ a: 1, b: 2, c: 3 });
      }); 

    });
    
   


  });

}());
