(function() {
  'use strict';

  describe('객체 & 배열', function() {

    describe('01_getElementOfArrayProperty', function() {
      it('TestCase 1', function() {
        const obj = {
          key: ['value'],
          number: [0, 1, 2, 3, 4, 5],
          name: ['Jamil', 'Albrey']
        };
        expect(getElementOfArrayProperty(obj,'name',0 )).to.equal('Jamil');
      }); 
      it('TestCase 2', function() {
        const obj = {
          number: [0, 1, 2, 3, 4, 5],
          key: ['value']
        };
        expect(getElementOfArrayProperty(obj,'number', 5)).to.equal(5);
      }); 
      it('TestCase 3', function() {
        const obj = {
          number: []
        };
        expect(getElementOfArrayProperty(obj,'number', 3)).to.equal(undefined);
      }); 
      it('TestCase 4', function() {
        const obj = {
          number: [0, 1, 2, 3, 4, 5],
          string: ['a', 'b', 'c', 'd']
        };
        expect(getElementOfArrayProperty(obj,'number', 10)).to.equal(undefined);
      }); 
      it('TestCase 5', function() {
        const obj = {
          number: 5,
          string: ['a', 'b', 'c', 'd']
        };
        expect(getElementOfArrayProperty(obj,'number', 3)).to.equal(undefined);
      }); 
      it('TestCase 6', function() {
        const obj = {
          number: [0, 1, 2, 3, 4, 5],
          string: ['a', 'b', 'c', 'd'],
          boolean: [true, false, true]
        };
        expect(getElementOfArrayProperty(obj,'string', 3)).to.equal('d');
      }); 
      it('TestCase 7', function() {
        const obj = {
          number: [0, 1, 2, 3, 4, 5]
        };
        expect(getElementOfArrayProperty(obj,'num', 3)).to.equal(undefined);
      }); 
    });

    describe('02_select', function() {
      it('TestCase 1', function() {
        const arr = ['a', 'c', 'e'];
        const obj = {
          a: 1,
          b: 2,
          c: 3,
          d: 4
        };
        expect(select(arr, obj)).to.eql({ a: 1, c: 3 }).not.equal(obj);
      }); 
      it('TestCase 2', function() {
        const arr = ['a', 'c', 'e'];
        const obj = {
          b: 2,
          d: 4,
          f: 7
        };
        expect(select(arr, obj)).to.eql({}).not.equal(obj);
      }); 
    });

    describe('03_getElementsLessThan100AtProperty', function() {
      it('TestCase 1', function() {
        let obj = {
          key: [1000, 20, 50, 500]
        };
        expect(getElementsLessThan100AtProperty(obj, 'key')).to.eql([20, 50]);
      }); 
      it('TestCase 2', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100]
        };
        expect(getElementsLessThan100AtProperty(obj, 'key1')).to.eql([-100, 50, 20]);
      }); 
      it('TestCase 3', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100]
        };
        expect(getElementsLessThan100AtProperty(obj, 'key2')).to.eql([]);
      }); 
    });

    describe('04_getNthElementOfProperty', function() {
      it('TestCase 1', function() {
        let obj = {
          key: [1, 2, 6]
        };
        expect(getNthElementOfProperty(obj, 'key', 1)).to.equal(2);
      }); 
      it('TestCase 2', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100]
        };
        expect(getNthElementOfProperty(obj, 'key1', 4)).to.equal(100);
      }); 
      it('TestCase 3', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100],
          key2: 100,
          key3: 'value3'
        };
        expect(getNthElementOfProperty(obj, 'key3', 2)).to.equal(undefined);
      }); 
      it('TestCase 4', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100],
          key2: 100,
          key3: 'value3'
        };
        expect(getNthElementOfProperty(obj, 'key1', 10)).to.equal(undefined);
      }); 
      it('TestCase 5', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100],
          key2: 100,
          key3: 'value3'
        };
        expect(getNthElementOfProperty(obj, 'key5', 3)).to.equal(undefined);
      }); 
    });

    describe('05_getLastElementOfProperty', function() {
      it('TestCase 1', function() {
        let obj = {
          key: [1, 2, 6]
        };
        expect(getLastElementOfProperty(obj, 'key')).to.equal(6);
      }); 
      it('TestCase 2', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100]
        };
        expect(getLastElementOfProperty(obj, 'key1')).to.equal(100);
      }); 
      it('TestCase 3', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100],
          key2: 100,
          key3: 'value3'
        };
        expect(getLastElementOfProperty(obj, 'key3')).to.equal(undefined);
      }); 
      it('TestCase 4', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [],
          key2: 100,
          key3: 'value3'
        };
        expect(getLastElementOfProperty(obj, 'key1')).to.equal(undefined);
      }); 
      it('TestCase 5', function() {
        let obj = {
          key: [1000, 20, 50, 500],
          key1: [-100, 50, 20, 500, 100],
          key2: 100,
          key3: 'value3'
        };
        expect(getLastElementOfProperty(obj, 'key5', 3)).to.equal(undefined);
      }); 
    });

    describe('06_getSquaredElementsAtProperty', function() {
      it('TestCase 1', function() {
        let obj = {
          key: [2, 1, 5]
        };
        expect(getSquaredElementsAtProperty(obj, 'key')).to.eql([4, 1, 25]);
      }); 
      it('TestCase 2', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [4, 5, -2, 0],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getSquaredElementsAtProperty(obj, 'key2')).to.eql([9, 100, 4, 0, 4]);
      }); 
      it('TestCase 3', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getSquaredElementsAtProperty(obj, 'key1')).to.eql([]);
      }); 
      it('TestCase 4', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [4, 5, -2, 0],
          key2: 2
        };
        expect(getSquaredElementsAtProperty(obj, 'key2')).to.eql([]);
      }); 
      it('TestCase 5', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getSquaredElementsAtProperty(obj, 'key5')).to.eql([]);
      }); 
    });

    describe('07_getAllButLastElementOfProperty', function() {
      it('TestCase 1', function() {
        let obj = {
          key: [1, 2, 3]
        };
        expect(getAllButLastElementOfProperty(obj, 'key')).to.eql([1, 2]);
      }); 
      it('TestCase 2', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [4, 5, -2, 0],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getAllButLastElementOfProperty(obj, 'key1')).to.eql([4, 5, -2]);
      }); 
      it('TestCase 3', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getAllButLastElementOfProperty(obj, 'key1')).to.eql([]);
      }); 
      it('TestCase 4', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [4, 5, -2, 0],
          key2: 2
        };
        expect(getAllButLastElementOfProperty(obj, 'key2')).to.eql([]);
      }); 
      it('TestCase 5', function() {
        let obj = {
          key: [2, 1, 5],
          key1: [],
          key2: [-3, -10, 2, 0, -2]
        };
        expect(getAllButLastElementOfProperty(obj, 'key5')).to.eql([]);
      }); 
    });

   
  });

}());
