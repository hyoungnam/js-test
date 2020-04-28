(function() {
  'use strict';

  describe('타입', function() {

    describe('1. convertToString', function() {
      it('TestCase 1', function() {
        expect(convertToString(120)).to.equal('120');
      }); 
      it('TestCase 2', function() {
        expect(convertToString('hello')).to.equal('hello');
      }); 
      it('TestCase 3', function() {
        expect(convertToString(true)).to.equal('true');
      }); 
      it('TestCase 4', function() {
        expect(convertToString(0)).to.equal('0');
      }); 
      it('TestCase 5', function() {
        expect(convertToString(NaN)).to.equal('NaN');
      }); 
    });
    
    describe('2. convertToNumber', function() {
      it('TestCase 1', function() {
        expect(convertToNumber('123')).to.equal(123);
      }); 
      it('TestCase 2', function() {
        expect(convertToNumber('hello')).to.be.NaN;
      }); 
      it('TestCase 3', function() {
        expect(convertToNumber('3.141952')).to.equal(3.141952);
      }); 
    });
    describe('3. isFalsy', function() {
      it('TestCase 1', function() {
        expect(isFalsy('hello')).to.equal(false);
      }); 
      it('TestCase 2', function() {
        expect(isFalsy(0)).to.equal(true);
      }); 
      it('TestCase 3', function() {
        expect(isFalsy(true)).to.equal(false);
      }); 
      it('TestCase 4', function() {
        expect(isFalsy(undefined)).to.equal(true);
      }); 
      it('TestCase 5', function() {
        expect(isFalsy(NaN)).to.equal(true);
      }); 
      it('TestCase 6', function() {
        expect(isFalsy('')).to.equal(true);
      }); 
      it('TestCase 7', function() {
        expect(isFalsy(true)).to.equal(false);
      }); 
      it('TestCase 8', function() {
        expect(isFalsy(1)).to.equal(false);
      }); 
    });
    describe('4. getType', function() {
      it('TestCase 1', function() {
        expect(getType('hello')).to.equal('string');
      }); 
      it('TestCase 2', function() {
        expect(getType(10)).to.equal('number');
      }); 
      it('TestCase 3', function() {
        expect(getType(true)).to.equal('boolean');
      }); 
      it('TestCase 4', function() {
        expect(getType({name: 'steve'})).to.equal('object');
      }); 
      it('TestCase 5', function() {
        expect(getType([100,200,300])).to.equal('array');
      }); 
    });


  });

}());
