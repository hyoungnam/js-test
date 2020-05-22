(function() {
  'use strict';

  describe('추가', function() {

    describe('Week 1-1 isOdd', function() {
      it('TestCase 1', function() {
        expect(isOdd(42)).to.equal(false);
      }); 
      it('TestCase 2', function() {
        expect(isOdd(19)).to.equal(true);
      }); 
    });
    describe('Week 1-2 sum', function() {
      it('TestCase 1', function() {
        expect(sum(3)).to.equal(6);
      }); 
      it('TestCase 2', function() {
        expect(sum(4)).to.equal(10);
      }); 
      it('TestCase 3', function() {
        expect(sum(5)).to.equal(15);
      }); 
    });

    describe('Week 1-3 onlyEvenElements', function() {
      it('TestCase 1', function() {
        expect(onlyEvenElements([1,2,3,4,5])).to.eql([2,4]);
      }); 
      it('TestCase 2', function() {
        expect(onlyEvenElements([1,3,5,7,9,10])).to.eql([10]);
      }); 
    });

    describe('Week 1-4 removeOddValues', function() {
      it('TestCase 1', function() {
        const obj = { a: 1, b: 2, c: 3, d: 'hello' }
        expect(removeOddValues(obj)).to.eql({ b: 2, d: 'hello' });
      }); 
      it('TestCase 2', function() {
        const obj = { a: 1, b: 2, c: '3' }
        expect(removeOddValues(obj)).to.eql({ b: 2, c: '3' });
      }); 
    });

    describe('Week 1-5 filteredArray', function() {
      it('TestCase 1', function() {
        const arr =[1,2,3];
        let isOdd = function (num) {
          if (num%2) 
            return true;
          else 
            return false;
        }
        expect(filteredArray(arr, isOdd)).to.eql([1, 3]);
      }); 
      it('TestCase 2', function() {
        const arr =[1,2,3,4,5];
        let isEven = function (num) {
          if (num%2) 
            return false;
          else 
            return true;
        }
        expect(filteredArray(arr, isEven)).to.eql([2,4]);
      }); 
    });
    
    describe('Week 2-1 ABCheck', function() {
      it('TestCase 1', function() {
        expect(ABCheck('lane Borrowed')).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(ABCheck('service repo')).to.equal(false);
      }); 
      it('TestCase 3', function() {
        expect(ABCheck(undefined)).to.equal(false);
      }); 
    });

    describe('Week 2-2 firstReverse', function() {
      it('TestCase 1', function() {
        expect(firstReverse('firstReverse')).to.equal('esreveRtsrif');
      }); 
      it('TestCase 2', function() {
        expect(firstReverse('I love Game')).to.equal('emaG evol I');
      }); 
    });

    describe('Week 2-3 bugInApple', function() {
      it('TestCase 1', function() {
        const arr = [["A","A","A","A","A"],
                     ["A","B","A","A","A"],
                     ["A","A","A","A","A"],
                     ["A","A","A","A","A"],
                     ["A","A","A","A","A"]]
        expect(bugInApple(arr)).to.eql([1,1]);
      }); 
      it('TestCase 2', function() {
        const arr = [ [ 'B' ] ]
        expect(bugInApple(arr)).to.eql([0,0]);
      });
      it('TestCase 3', function() {
        const arr = [[ 'A', 'A' ], [ 'B', 'A' ]]
        expect(bugInApple(arr)).to.eql([1,0]);
      });
    });

    describe('Week 2-4 flatten', function() {
      it('TestCase 1', function() {
        expect(flatten([1,2,[3],[4]])).to.eql([1,2,3,4]);
      }); 
      it('TestCase 2', function() {
        expect(flatten([['1'], ['2', 3], [4], 5, ['6', 7]])).to.eql([ '1', '2', 3, 4, 5, '6', 7]);
      }); 
    });
    
    describe('Week 3-1 firstCharacter', function() {
      it('TestCase 1', function() {
        expect(firstCharacter("The community at Facebook Developer Community might be the biggest asset")).to.eql("TcaFDCmbtba");
      }); 
      it('TestCase 2', function() {
        expect(firstCharacter("Hello my Name is Lee")).to.eql("HmNiL")
      }); 
      it('TestCase 3', function() {
        expect(firstCharacter("Wow")).to.eql("W")
      }); 
    });

    describe('Week 3-2 longestWord', function() {
      it('TestCase 1', function() {
        expect(longestWord("The community at Facebook Developer Community might be the biggest asset")).to.equal("community");
      }); 
      it('TestCase 2', function() {
        expect(longestWord("I love coding")).to.equal("coding")
      }); 
      it('TestCase 3', function() {
        expect(longestWord("Teamwork skills will take you anywhere")).to.equal("Teamwork")
      }); 
      it('TestCase 4', function() {
        expect(longestWord("Apple Apple Apple Apple Apple")).to.equal("Apple")
      }); 
    });

    describe('Week 3-3 dashInsert', function() {
      it('TestCase 1', function() {
        expect(DashInsert("454793")).to.equal("4547-9-3");
      }); 
      it('TestCase 2', function() {
        expect(DashInsert("15920432")).to.equal("1-5-920432");
      }); 
      it('TestCase 3', function() {
        expect(DashInsert("246802")).to.equal("246802");
      }); 
      it('TestCase 4', function() {
        expect(DashInsert("1")).to.equal("1");
      }); 
    });

    describe('Week 4-1 powerOfTwo', function() {
      it('TestCase 1', function() {
        expect(powerOfTwo(16)).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(powerOfTwo(22)).to.equal(false);
      }); 
      it('TestCase 3', function() {
        expect(powerOfTwo(0)).to.equal(false);
      }); 
      it('TestCase 4', function() {
        expect(powerOfTwo(2)).to.equal(true);
      }); 
    });

    describe('Week 4-2 letterCapitalize', function() {
      it('TestCase 1', function() {
        expect(letterCapitalize("hello world")).to.equal("Hello World");
      }); 
      it('TestCase 2', function() {
        expect(letterCapitalize("javascript is sexy")).to.equal("Javascript Is Sexy");
      }); 
      it('TestCase 3', function() {
        expect(letterCapitalize("Letter Capitalize")).to.equal("Letter Capitalize");
      }); 
      it('TestCase 4', function() {
        expect(letterCapitalize("I'm So hot")).to.equal("I'm So Hot");
      }); 
    });

    describe('Week 4-3 isIsogram', function() {
      it('TestCase 1', function() {
        expect(isIsogram("Dermatoglyphics")).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(isIsogram("aba")).to.equal(false);
      }); 
      it('TestCase 3', function() {
        expect(isIsogram("moOse")).to.equal(false);
      }); 
    });

    describe('Week 4-4 primeMover', function() {
      it('TestCase 1', function() {
        expect(primeMover(16)).to.equal(53);
      }); 
      it('TestCase 2', function() {
        expect(primeMover(25)).to.equal(97);
      }); 
      it('TestCase 3', function() {
        expect(primeMover(2)).to.equal(3);
      }); 
    });

    describe('Week 5-1 multiplicativePersistence', function() {
      it('TestCase 1', function() {
        expect(multiplicativePersistence(39)).to.equal(3);
      }); 
      it('TestCase 2', function() {
        expect(multiplicativePersistence(18)).to.equal(1);
      }); 
      it('TestCase 3', function() {
        expect(multiplicativePersistence(88)).to.equal(3);
      }); 
    });

    describe('Week 5-2 superIncreasing', function() {
      it('TestCase 1', function() {
        expect(superIncreasing([1, 3, 6, 13, 54])).to.equal(true);
      }); 
      it('TestCase 2', function() {
        expect(superIncreasing([979, 1737, -2146, -337, 1316])).to.equal(false);
      }); 
      it('TestCase 3', function() {
        expect(superIncreasing([1, 5, 12, 24, 50, 52, 200])).to.equal(false);
      }); 
    });

    describe('Week 5-3 numberSearch', function() {
      it('TestCase 1', function() {
        expect(numberSearch("Hello6 9World 2, Nic8e D7ay!")).to.equal(2);
      }); 
    });

    describe('Week 6-1 thirdGreatest', function() {
      it('TestCase 1', function() {
        const arr = ["hello", "world", "before", "all"]
        expect(thirdGreatest(arr)).to.equal("world");
      }); 
      it('TestCase 2', function() {
        const arr = ["hello", "world", "after", "all"]
        expect(thirdGreatest(arr)).to.equal("after");
      });  
    });

    describe('Week 6-3 threeFiveMultiples', function() {
      it('TestCase 1', function() {
        expect(threeFiveMultiples(10)).to.equal(23);
      }); 
      it('TestCase 2', function() {
        expect(threeFiveMultiples(17)).to.equal(60);
      });  
    });
    
    describe("Week 9-1 sumOnMultiplicationOfOrderedPairs", function() {
      it('TestCase 1', function() {
        expect(sumOnMultiplicationOfPairs(2, 3, 4)).to.equal(26);
      }); 
      it('TestCase 2', function() {
        expect(sumOnMultiplicationOfPairs(3, 4, 5, 6, 7)).to.equal(245);
      });  
    });

    describe("Week 9-2 findMissingNumber", function() {
      it('TestCase 1', function() {
        expect(findMissingNumber('1 6 2 4 3')).to.equal(5);
      }); 
      it('TestCase 2', function() {
        expect(findMissingNumber('1 2 3 4 5 6 7 9')).to.equal(8);
      });  
    });

    describe("Week 9-3 GCD", function() {
      it('TestCase 1', function() {
        expect(gcd(22, 24)).to.equal(2);
      }); 
      it('TestCase 2', function() {
        expect(gcd(81, 135)).to.equal(27);
      });  
    });
   
  });

}());
