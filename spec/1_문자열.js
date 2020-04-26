(function() {
  'use strict';

  describe('문자열', function() {

    describe('1. getFullName', function() {
      it('TestCase 1', function() {
        expect(getFullName('Joe', 'Smith')).to.equal('Joe Smith');
      }); 
    });
    describe('2. getLengthOfWord', function() {
      it('TestCase 1', function() {
        expect(getLengthOfWord('Joe')).to.equal(3);
      }); 
      it('TestCase 2', function() {
        expect(getLengthOfWord('')).to.equal(0);
      }); 
    });
    describe('3. computeAverageLengthOfWords', function() {
      it('TestCase 1', function() {
        expect(computeAverageLengthOfWords('code', 'programs')).to.equal(6);
      }); 
      it('TestCase 2', function() {
        expect(computeAverageLengthOfWords('html', 'javascript')).to.equal(7);
      }); 
    });
    describe('4. isOddLength', function() {
      it('TestCase 1', function() {
        expect(isOddLength('javascript')).to.equal(false);
      }); 
      it('TestCase 2', function() {
        expect(isOddLength('css')).to.equal(true);
      }); 
    });
    describe('5. isEvenLength', function() {
      it('TestCase 1', function() {
        expect(isEvenLength('javascript')).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(isEvenLength('css')).to.equal(false);
      }); 
    });
    describe('6. repeatString', function() {
      it('TestCase 1', function() {
        expect(repeatString('code', 3)).to.equal('codecodecode');
      }); 
      it('TestCase 2', function() {
        expect(repeatString('', 0)).to.equal('');
      }); 
      it('TestCase 3', function() {
        expect(repeatString('java', 10)).to.equal('javajavajavajavajavajavajavajavajavajava');
      }); 
    });
    describe('7. findShortestOfThreeWords', function() {
      it('TestCase 1', function() {
        expect(findShortestOfThreeWords('a', 'two', 'three')).to.equal('a');
      }); 
      it('TestCase 2', function() {
        expect(findShortestOfThreeWords('dbcd', 'abd', 'abc')).to.equal('abd');
      }); 
      it('TestCase 3', function() {
        expect(findShortestOfThreeWords('abc', 'abc', 'abc')).to.equal('abc');
      }); 
    });

    describe('8. countCharacter', function() {
      it('TestCase 1', function() {
        expect(countCharacter('I am a hacker', 'a')).to.equal(3);
      }); 
      it('TestCase 2', function() {
        expect(countCharacter('Hello my name is java', 'z')).to.equal(0);
      });
      it('TestCase 3', function() {
        expect(countCharacter('Nice to meet you', 'o')).to.equal(2);
      });
    });

    describe('9. areValidCredentials', function() {
      it('TestCase 1', function() {
        expect(areValidCredentials('Ritu', 'mylongpassword')).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(areValidCredentials('Ryu', 'mypassword')).to.equal(false);
      });
      it('TestCase 3', function() {
        expect(areValidCredentials('Raykay', 'mypass')).to.equal(false);
      });
      it('TestCase 4', function() {
        expect(areValidCredentials('Ray', 'pass1')).to.equal(false);
      });
    });
    describe('10. findMinLengthOfThreeWords', function() {
      it('TestCase 1', function() {
        expect(findMinLengthOfThreeWords('a', 'be', 'see')).to.equal(1);
      }); 
      it('TestCase 2', function() {
        expect(findMinLengthOfThreeWords('tobe', 'abc', 'abc')).to.equal(3);
      });
      it('TestCase 3', function() {
        expect(findMinLengthOfThreeWords('abcde', 'abcde', 'abcde')).to.equal(5);
      });
    });


  });

}());
