(function() {
  'use strict';

  describe('알고리즘', function() {

    describe('001_convertArrayToObject1: transformFirstAndLast', function() {
      it('TestCase 1', function() {
        const arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
        expect(transformFirstAndLast(arr)).to.eql({Queen: 'Beyonce'});
      }); 
      it('TestCase 2', function() {
        const arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
        expect(transformFirstAndLast(arr)).to.eql({Kevin: 'Spacey'});
      }); 
      it('TestCase 3', function() {
        const arr = ['malone', 'halsey', 'lorde', 2, 4]
        expect(transformFirstAndLast(arr)).to.eql({malone: 4});
      }); 
      it('TestCase 4', function() {
        const arr = [4, 'halsey', 'lorde', 2, 'true']
        expect(transformFirstAndLast(arr)).to.eql({4: 'true'});
      }); 
      
    });
    
    describe('002_convertObjectToArray1: getAllKeys', function() {
      it('TestCase 1', function() {
        const obj = { name : 'Sam', age : 25, hasPets : true }
        expect(getAllKeys(obj)).to.eql(['name', 'age', 'hasPets']);
      }); 
      it('TestCase 2', function() {
        const obj = { a : 'a', number : 11, hungry : true, grammyWins : 1 }
        expect(getAllKeys(obj)).to.eql(['a', 'number', 'hungry', 'grammyWins']);
      }); 
      it('TestCase 3', function() {
        const obj = { 1 : 'a', 2 : 11, 3 : true, grammyWins : 1 }
        expect(getAllKeys(obj)).to.eql(['1', '2', '3', 'grammyWins']);
      }); 
    });

    describe('003_convertArrayToObject2: fromListToObject', function() {
      it('TestCase 1', function() {
        const arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
        expect(fromListToObject(arr)).to.eql({ make : 'Ford', model : 'Mustang', year : 1964 });
      }); 
      it('TestCase 2', function() {
        const arr = [['title', 'parasite'], ['actior', 'song'], ['director', 'bong'], ['year', 2019], ['time', '2h12m']]
        expect(fromListToObject(arr)).to.eql({ title : 'parasite', actior : 'song', director : 'bong', year : 2019, time : '2h12m'  });
      }); 
    });

    describe('005_convertArrayToObject3: transformEmployeeData', function() {
      it('TestCase 1', function() {
        const arr = 
        [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
          [['firstName', 'Mary'],['lastName', 'Jenkins'],['age', 36],['role', 'manager']]
        ];
        const result =
        [
          { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
          { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
        ]
        expect(transformEmployeeData(arr)).to.eql(result);
      }); 
      it('TestCase 2', function() {
        const arr = 
        [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'], ['salary', 400], ['tshirtSize', 105]],
          [['firstName', 'Mary'],['lastName', 'Jenkins'],['age', 36],['role', 'manager'], ['salary', 200], ['tshirtSize', 95]]
        ];
        const result =
        [
          { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk', salary: 400, tshirtSize: 105 },
          { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager', salary: 200, tshirtSize: 95 }
        ]
        expect(transformEmployeeData(arr)).to.eql(result);
      }); 
    });

    describe('006_convertObjectToArray3: transformEmployeeData', function() {
      it('TestCase 1', function() {
        const arr = 
        [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
          [['firstName', 'Mary'],['lastName', 'Jenkins'],['age', 36],['role', 'manager']]
        ];
        const result =
        [
          { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
          { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
        ]
        expect(transformEmployeeData(arr)).to.eql(result);
      }); 
      it('TestCase 2', function() {
        const arr = 
        [
          [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'], ['salary', 400], ['tshirtSize', 105]],
          [['firstName', 'Mary'],['lastName', 'Jenkins'],['age', 36],['role', 'manager'], ['salary', 200], ['tshirtSize', 95]]
        ];
        const result =
        [
          { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk', salary: 400, tshirtSize: 105 },
          { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager', salary: 200, tshirtSize: 95 }
        ]
        expect(transformEmployeeData(arr)).to.eql(result);
      }); 
    });

    describe('007_greetCustomers', function() {
      it('TestCase 1', function() {
        let customerData = {Joe: { visits: 1}, Carol: {visits: 2}, Howard: {visits: 3}, Carrie: {visits: 4}};
        expect(greetCustomer(customerData, 'Joe')).to.eql('Welcome back, Joe! We\'re glad you liked us the first time!');
      }); 
      it('TestCase 2', function() {
        let customerData = {Joe: { visits: 1}, Carol: {visits: 2}, Howard: {visits: 3}, Carrie: {visits: 4}};
        expect(greetCustomer(customerData, 'Carol')).to.eql('Welcome back, Carol! So glad to see you again!');
      }); 
      it('TestCase 3', function() {
        let customerData = {Joe: { visits: 1}, Carol: {visits: 2}, Howard: {visits: 3}, Carrie: {visits: 4}};
        expect(greetCustomer(customerData, 'Carrie')).to.eql('Welcome back, Carrie! So glad to see you again!');
      }); 
      it('TestCase 4', function() {
        let customerData = {Joe: { visits: 1}, Carol: {visits: 2}, Howard: {visits: 3}, Carrie: {visits: 4}};
        expect(greetCustomer(customerData, 'James')).to.eql('Welcome! Is this your first time?');
      }); 
    });

    describe('a001_convertDoubleSpaceToSingle', function() {
      it('TestCase 1', function() {
        expect(convertDoubleSpaceToSingle('string  with  double  spaces')).to.equal('string with double spaces');
      }); 
    });

    describe('a002_getIndexOf', function() {
      it('TestCase 1', function() {
        expect(getIndexOf('a', 'I am a hacker')).to.equal(2);
      }); 
      it('TestCase 2', function() {
        expect(getIndexOf('m', 'Hello my Name is Pope')).to.equal(6);
      }); 
    });

    describe('a003_calculateBillTotal', function() {
      it('TestCase 1', function() {
        expect(calculateBillTotal(20)).to.equal(24.9);
      }); 
    });

    describe('a004_getStringLength', function() {
      it('TestCase 1', function() {
        expect(getStringLength('hello')).to.equal(5);
      }); 
    });

    describe('a005_sumDigits', function() {
      it('TestCase 1', function() {
        expect(sumDigits(1148)).to.equal(14);
      }); 
      it('TestCase 2', function() {
        expect(sumDigits(-316)).to.equal(4);
      }); 
      it('TestCase 3', function() {
        expect(sumDigits(-91)).to.equal(-8);
      }); 
      it('TestCase 4', function() {
        expect(sumDigits(-55)).to.equal(0);
      }); 
      it('TestCase 5', function() {
        expect(sumDigits(0)).to.equal(0);
      }); 
    });

    describe('a007_modulo', function() {
      it('TestCase 1', function() {
        expect(modulo(25, 4)).to.equal(1);
      }); 
      it('TestCase 2', function() {
        expect(modulo(19, 5)).to.equal(4);
      }); 
      it('TestCase 3', function() {
        expect(modulo(20, 4)).to.equal(0);
      }); 
      it('TestCase 4', function() {
        expect(modulo(0, 4)).to.equal(0);
      }); 
      it('TestCase 5', function() {
        expect(modulo(12, 0)).to.be.NaN;
      }); 
    });
    describe('a008_isOddWithoutModulo', function() {
      it('TestCase 1', function() {
        expect(isOddWithoutModulo(17)).to.be.true;
      }); 
      it('TestCase 2', function() {
        expect(isOddWithoutModulo(2)).to.be.false;
      }); 
    });

    describe('a010_multiplyBetween', function() {
      it('TestCase 1', function() {
        expect(multiplyBetween(1,4)).to.equal(6);
      }); 
      it('TestCase 2', function() {
        expect(multiplyBetween(2,5)).to.equal(24);
      }); 
      it('TestCase 3', function() {
        expect(multiplyBetween(5, 2)).to.equal(0);
      }); 
    });

   
  });

}());
