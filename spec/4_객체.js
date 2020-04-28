(function() {
  'use strict';

  describe('객체', function() {

    describe('1. getProperty', function() {
      it('TestCase 1', function() {
        let person = {
          name: 'steve',
          age: 16
        };
        expect(getProperty(person, 'name')).to.equal('steve');
      }); 
      it('TestCase 2', function() {
        let data = {
          weight: 65,
          height: 18,
        }
        expect(getProperty(data, 'height')).to.equal(18);
      }); 
      it('TestCase 3', function() {
        let computer = {
          cpu: 'intel',
          graphic: 'gtx1060ti',
        }
        expect(getProperty(computer, 'ram')).to.equal();
      }); 
    });
    describe('2. addProperty', function() {
      it('TestCase 1', function() {
        let input = {};
        let expected = {
          isMale: true
        };
        expect(JSON.stringify(addProperty(input, 'isMale'))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 2', function() {
        let input = {
          isMale: true
        };
        let expected = {
          isMale: true,
          isProgrammer: true
        };
        expect(JSON.stringify(addProperty(input, 'isProgrammer'))).to.be.equal(JSON.stringify(expected));
      }); 
    });
    describe('3. addPropertyAndValue', function() {
      it('TestCase 1', function() {
        let input = {};
        let expected = {
          isMale: true
        };
        expect(JSON.stringify(addPropertyAndValue(input, 'isMale', true))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 2', function() {
        let input = {
          isMale: true
        };
        let expected = {
          isMale: true,
          age: 30
        };
        expect(JSON.stringify(addPropertyAndValue(input, 'age', 30))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 3', function() {
        let input = {};
        let expected = {
          job: 'Programmer'
        };
        expect(JSON.stringify(addPropertyAndValue(input, 'job', 'Programmer'))).to.be.equal(JSON.stringify(expected));
      }); 
    });
    describe('4. addObjectProperty', function() {
      it('TestCase 1', function() {
          let input1 = {
            name: 'Joe',
            role: 'Team Member'
          };
          let input2 = {
            name: 'Steve',
            role: 'CEO'
          };
          let expected = {
            name: 'Joe',
            role: 'Team Member',
            manager: {
              name: 'Steve',
              role: 'CEO'
            }, 
          };
        expect(JSON.stringify(addObjectProperty(input1, 'manager', input2))).to.be.equal(JSON.stringify(expected));
      }); 
    
    });
   
    describe('5. removeProperty', function() {
      it('TestCase 1', function() {
        let input = {
          name: 'Sam',
          age: 20
        };
        let expected = {
          age: 20
        };
        expect(JSON.stringify(removeProperty(input, 'name'))).to.be.equal(JSON.stringify(expected));
      }); 
    });

    describe('6. isPersonOldEnoughToVote', function() {
      it('TestCase 1', function() {
        let obj = {
          name: 'james',
          age: 18
        };
        expect(isPersonOldEnoughToVote(obj)).to.be.equal(true);
      }); 
      it('TestCase 2', function() {
        let obj = {
          name: 'north',
          age: 29
        };
        expect(isPersonOldEnoughToVote(obj)).to.be.equal(true);
      }); 
      it('TestCase 3', function() {
        let obj = {
          name: 'south',
          age: 10
        };
        expect(isPersonOldEnoughToVote(obj)).to.be.equal(false);
      }); 
    
    });

    describe('7. removeNumbersLargerThan', function() {
      it('TestCase 1', function() {
        let input = {
          a: 8,
          b: 2,
          c: 'montana'
        }
        let expected = {
          b: 2,
          c: 'montana'
        }
        expect(JSON.stringify(removeNumbersLargerThan(5, input))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 2', function() {
        let input = {
          a: 8,
          b: 2,
          c: 'montana',
          d: 15,
          e: 'seoul',
          f: 1
        }
        let expected = {
          c: 'montana',
          e: 'seoul'
        }
        expect(JSON.stringify(removeNumbersLargerThan(0, input))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 3', function() {
        let input = {
          a: 8,
          b: 2,
          c: 'montana',
        }
        expect((removeNumbersLargerThan(10, input))).to.deep.equal(input);
      });
      
      
    


    });
    describe('8. removeOddValues', function() {
      it('TestCase 1', function() {
        let input = {
          a: 2,
          b: 3,
          c: 4
        }
        let expected = {
          a: 2,
          c: 4
        }
        expect(JSON.stringify(removeOddValues(input))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 2', function() {
        let input = {
          a: 8,
          b: 2,
          c: 'montana',
          d: 15,
          e: 'seoul',
          f: 1
        }
        let expected = {
          a: 8,
          b: 2,
          c: 'montana',
          e: 'seoul'
        }
        expect(JSON.stringify(removeOddValues(input))).to.be.equal(JSON.stringify(expected));
      }); 
      it('TestCase 3', function() {
        let input = {
          a: 8,
          b: 2,
          c: 'montana',
        }
        expect(removeOddValues(input)).to.deep.equal(input);
      }); 
    
    });

    describe('9. countNumberOfKeys', function() {
      it('TestCase 1', function() {
        let obj = {
          a: 2,
          b: 3,
          c: 4
        }
        expect(countNumberOfKeys(obj)).to.be.equal(3);
      }); 
      it('TestCase 2', function() {
        let obj = {}
        expect(countNumberOfKeys(obj)).to.be.equal(0);
      }); 
     
    });

    describe('10. printObject', function() {
      it('TestCase 1', function() {
        let obj = {
          name: 'Steve',
          age: 13,
          sex: 'Male'
        }
        expect(printObject(obj)).to.be.equal('name: Steve\nage: 13\nsex: Male\n');
      }); 
    });

    describe('11. extend', function() {
      it('TestCase 1', function() {
        let obj1 = {
          a: 1,
          b: 2
        };
        let obj2 = {
          b: 4,
          c: 3
        };
        let expected = {
          a: 1,
          b: 2,
          c: 3
        };
        expect(extend(obj1, obj2)).to.deep.equal(expected);
        expect(obj2).to.deep.equal({b:4, c:3});
      }); 
      it('TestCase 2', function() {
        let obj1 = {
          a: 1,
          b: 2,
          c: 5
        };
        let obj2 = {
          b: 4,
          c: 3
        };
        let expected = {
          a: 1,
          b: 2,
          c: 5
        };
        expect(extend(obj1, obj2)).to.deep.equal(expected);
        expect(obj2).to.deep.equal({b:4, c:3});
      }); 
      it('TestCase 3', function() {
        let obj1 = {
          a: 1,
          b: 2,
          c: 5
        };
        let obj2 = {
          d: 4,
          e: 3
        };
        let expected = {
          a: 1,
          b: 2,
          c: 5,
          d: 4,
          e: 3
        };
        expect(extend(obj1, obj2)).to.deep.equal(expected);
        expect(obj2).to.deep.equal({d: 4, e:3});
      }); 
    });

    describe('12. countAllCharacters', function() {
      it('TestCase 1', function() {
        let expected = {
          b: 1,
          a: 3,
          n: 2
        }
        expect(countAllCharacters('banana')).to.deep.equal(expected);
      });
      it('TestCase 2', function() {
        let expected = {
          a: 1,
          p: 2,
          l: 1,
          e: 1
        }
        expect(countAllCharacters('apple')).to.deep.equal(expected);
      });
      it('TestCase 3', function() {
        expect(countAllCharacters('')).to.deep.equal({});
      });
    });



  });

}());
