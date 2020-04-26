(function() {
  'use strict';

  // var checkForNativeMethods = function(runUnderbarFunction) {
  //   it('should not use the native version of any underbar methods in its implementation', function() {
  //     runUnderbarFunction();
  //     expect(Array.prototype.map.called).to.equal(false);
  //     expect(Array.prototype.indexOf.called).to.equal(false);
  //     expect(Array.prototype.forEach.called).to.equal(false);
  //     expect(Array.prototype.filter.called).to.equal(false);
  //     expect(Array.prototype.reduce.called).to.equal(false);
  //     expect(Array.prototype.every.called).to.equal(false);
  //     expect(Array.prototype.some.called).to.equal(false);
  //   });
  // };

  describe('조건문', function() {

    describe('1. isOldEnoughToDrink', function() {
      it('TestCase 1', function() {
        expect(isOldEnoughToDrink(32)).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(isOldEnoughToDrink(21)).to.equal(true);
      });
      it('TestCase 3', function() {
        expect(isOldEnoughToDrink(9)).to.equal(false);
      });
    });

    describe('2. checkAge', function() {
      it('TestCase 1', function() {
        expect(checkAge('trump', 50)).to.equal('Welcome, trump!');
      });
      it('TestCase 2', function() {
        expect(checkAge('bush', 16)).to.equal('Go home, bush!');
      });
      it('TestCase 3', function() {
        expect(checkAge('obama')).to.equal('Welcome, obama!');
      });
    });

    describe('3. equalsTen', function() {
      it('TestCase 1', function() {
        expect(equalsTen(5)).to.be.equal(false);
      });
      it('TestCase 2', function() {
        expect(equalsTen(10)).to.be.equal(true);
      });
    });

    describe('4. isGreaterThan', function() {
      it('TestCase 1', function() {
        expect(isGreaterThan(11, 10)).to.be.equal(false);
      });
      it('TestCase 2', function() {
        expect(isGreaterThan(8, 10)).to.be.equal(true);
      });
      it('TestCase 3', function() {
        expect(isGreaterThan(10, 10)).to.be.equal(false);
      });
    });

    describe('5. isEven', function() {
      it('TestCase 1', function() {
        expect(isEven(10)).to.be.equal(true);
      });
      it('TestCase 2', function() {
        expect(isEven(5)).to.be.equal(false);
      });
    });

    describe('6. isEvenAndGreaterThanTen', function() {
      it('TestCase 1', function() {
        expect(isEvenAndGreaterThanTen(12)).to.be.equal(true);
      });
      it('TestCase 2', function() {
        expect(isEvenAndGreaterThanTen(15)).to.be.equal(false);
      });
      it('TestCase 3', function() {
        expect(isEvenAndGreaterThanTen(8)).to.be.equal(false);
      });
      it('TestCase 4', function() {
        expect(isEvenAndGreaterThanTen(7)).to.be.equal(false);
      });
    });
    describe('7. convertScoreToGrade', function() {
      it('TestCase 1', function() {
        expect(convertScoreToGrade(95)).to.be.equal('A');
      });
      it('TestCase 2', function() {
        expect(convertScoreToGrade(90)).to.be.equal('A');
      });
      it('TestCase 3', function() {
        expect(convertScoreToGrade(80)).to.be.equal('B');
      });
      it('TestCase 4', function() {
        expect(convertScoreToGrade(76)).to.be.equal('C');
      });
      it('TestCase 5', function() {
        expect(convertScoreToGrade(70)).to.be.equal('C');
      });
      it('TestCase 6', function() {
        expect(convertScoreToGrade(62)).to.be.equal('D');
      });
      it('TestCase 7', function() {
        expect(convertScoreToGrade(102)).to.be.equal('INVALID SCORE');
      });
      it('TestCase 8', function() {
        expect(convertScoreToGrade(-5)).to.be.equal('INVALID SCORE');
      });
      it('TestCase 9', function() {
        expect(convertScoreToGrade(59)).to.be.equal('F');
      });
      it('TestCase 10', function() {
        expect(convertScoreToGrade(49)).to.be.equal('F');
      });
    });
    describe('8. convertScoreToGradeWithPlusAndMinus', function() {
      it('TestCase 1', function() {
        expect(convertScoreToGradeWithPlusAndMinus(100)).to.be.equal('A+');
      });
      it('TestCase 2', function() {
        expect(convertScoreToGradeWithPlusAndMinus(98)).to.be.equal('A+');
      });
      it('TestCase 3', function() {
        expect(convertScoreToGradeWithPlusAndMinus(92)).to.be.equal('A-');
      });
      it('TestCase 4', function() {
        expect(convertScoreToGradeWithPlusAndMinus(95)).to.be.equal('A');
      });
      it('TestCase 5', function() {
        expect(convertScoreToGradeWithPlusAndMinus(89)).to.be.equal('B+');
      });
      it('TestCase 6', function() {
        expect(convertScoreToGradeWithPlusAndMinus(81)).to.be.equal('B-');
      });
      it('TestCase 7', function() {
        expect(convertScoreToGradeWithPlusAndMinus(85)).to.be.equal('B');
      });
      it('TestCase 8', function() {
        expect(convertScoreToGradeWithPlusAndMinus(78)).to.be.equal('C+');
      });
      it('TestCase 9', function() {
        expect(convertScoreToGradeWithPlusAndMinus(71)).to.be.equal('C-');
      });
      it('TestCase 10', function() {
        expect(convertScoreToGradeWithPlusAndMinus(75)).to.be.equal('C');
      });
      it('TestCase 11', function() {
        expect(convertScoreToGradeWithPlusAndMinus(69)).to.be.equal('D+');
      });
      it('TestCase 12', function() {
        expect(convertScoreToGradeWithPlusAndMinus(61)).to.be.equal('D-');
      });
      it('TestCase 13', function() {
        expect(convertScoreToGradeWithPlusAndMinus(64)).to.be.equal('D');
      });
      it('TestCase 14', function() {
        expect(convertScoreToGradeWithPlusAndMinus(105)).to.be.equal('INVALID SCORE');
      });
      it('TestCase 15', function() {
        expect(convertScoreToGradeWithPlusAndMinus(-10)).to.be.equal('INVALID SCORE');
      });
      it('TestCase 16', function() {
        expect(convertScoreToGradeWithPlusAndMinus(50)).to.be.equal('F');
      });
      it('TestCase 17', function() {
        expect(convertScoreToGradeWithPlusAndMinus(42)).to.be.equal('F');
      });
    });

    describe('9. or', function() {
      it('TestCase 1', function() {
        expect(or(true, false)).to.be.equal(true);
      });
      it('TestCase 2', function() {
        expect(or(true, true)).to.be.equal(true);
      });
      it('TestCase 3', function() {
        expect(or(false, true)).to.be.equal(true);
      });
      it('TestCase 4', function() {
        expect(or(false, false)).to.be.equal(false);
      });
    });
    describe('10. isEitherEvenAndLessThan9', function() {
      it('TestCase 1', function() {
        expect(isEitherEvenAndLessThan9(2, 4)).to.be.equal(true);
      });
      it('TestCase 2', function() {
        expect(isEitherEvenAndLessThan9(72, 2)).to.be.equal(false);
      });
      it('TestCase 3', function() {
        expect(isEitherEvenAndLessThan9(6, 9)).to.be.equal(false);
      });
      it('TestCase 4', function() {
        expect(isEitherEvenAndLessThan9(0, 24)).to.be.equal(false);
      });
    });


  });

}());
