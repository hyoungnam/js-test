// SpecRunner를 활용하여서 조건을 만족시키세요.

/** 
 * # 01_getProperty
 * 
 * getProperty함수를 작성하세요
 * 파라미터로 객체와 키를 받는 getProperty함수가 있습니다. 
 * 이 함수는 주어진 객체와 키를 이용하여 속성값을 찾아 리턴합니다.
 * 
 * 노트:
 * 만일 주어진 키가 객체의 속성에 없다면, undefined를 리턴하면 됩니다.
 * 
 * let person = {
 *  name: 'Steve',
 *  age: 16
 * };
 * 
 * let output = getProperty(person, 'name');
 * console.log(output); // --> 'Steve'
 * let output2 = getProperty(person, 'age');
 * console.log(output2); // --> 16
*/

function getProperty(obj, propertyName) {

}

/** 
 * # 02_addProperty
 * 
 * `addProperty` 함수를 작성하세요
 * 파라미터로 객체와 키를 받는 `addProperty` 함수가 있습니다. 
 * 이 함수는 주어진 객체에, 키 이름으로 속성을 만들고 값을 `true`로 설정합니다.
 * 
 * let steve = {};
 * addProperty(steve, 'isMale');
 * console.log(steve.isMale); // --> true
 * addProperty(steve, 'isProgrammer');
 * console.log(steve.isProgrammer); // --> true
 * 
 * let jessica = {};
 * addProperty(jessica, 'isSmart');
 * console.log(jessica.isSmart); // --> true

*/
function addProperty(obj, propertyName) {
   
}


/** 
 * # 03_addPropertyAndValue
 * addPropertyAndValue 함수를 작성하세요.
 * 
 * 파라미터로 객체와 키 및 새로운 값을 받는 addPropertyAndValue 함수가 있습니다. 
 * 이 함수는 주어진 객체에, 키 이름으로 속성을 만들고 값을 설정합니다.
 *
 * let steve = {};
 * addPropertyAndValue(steve, 'isMale', true);
 * console.log(steve.isMale); // --> true
 * 
 * addPropertyAndValue(steve, 'age', 30);
 * console.log(steve.age); // --> 30
 * 
 * let jessica = {};
 * addPropertyAndValue(jessica, 'job', 'Programmer');
 * console.log(jessica.job); // --> 'Programmer'
 * 
*/
function addPropertyAndValue(obj, propertyName, value) {
  
}



/** 
 * # 04_addObjectProperty
 * addObjectProperty 함수를 작성하세요
 * 파라미터로 두 개의 객체와 키를 받는 addObjectProperty 함수가 있습니다. 
 * 이 함수는 주어진 첫번째 객체에, 키 이름으로 속성을 만드는데, 
 * 그 값은 두번째 객체로 설정합니다.
 * 객체의 키 값은 또다른 객체가 될 수 있음을 기억하세요.

let person1 = {
  name: 'Joe',
  role: 'Team Member'
};
let person2 = {
  name: 'Steve',
  role: 'CEO'
};

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager);
{
  name: 'Steve',
  role: 'CEO'
}

console.log(person1);
{
  name: 'Joe',
  role: 'Team Member',
  manager: {
    name: 'Steve',
    role: 'CEO'
    }
  }
 
*/

function addObjectProperty(obj1, propertyName, obj2) {
   
}


/** 
 * # 05_removeProperty
 * Write a function called "removeProperty". 
 * ("removeProperty" 함수를 작성하세요.)
 * 
 * Given an object and a key, "removeProperty" 
 * removes the given key from the given object. 
 * (객체와 키가 주어졌을때, "removeProperty" 함수는 주어진 
 * 키에 해당하는 객체의 속성값을 제거해야 합니다.)
 * 
 * let obj = {
 * name: 'Sam',
 * age: 20
 * };
 * removeProperty(obj, 'name');
 * console.log(obj.name); // --> undefined
*/

function removeProperty(obj, propertyName) {
  
}


/** 
 * # 06_isPersonOldEnoughToVote
 * Write a function called "isPersonOldEnoughToVote". 
 * ("isPersonOldEnoughToVote" 함수를 작성하세요.)
 * 
 * Given a "person" object, that contains an "age" property, 
 * "isPersonOldEnoughToVote" returns whether the given person 
 * is old enough to vote. 
 * ("age" 속성을 가지고 있는 "person" 객체가 주어졌을때, 
 * "isPersonOldEnoughToVote" 함수는 그 사람이 미국에서 합법적으로 
 * 투표를 할 수 있는 나이인지를 반환해야 합니다.)
 * 
 * Notes:
 * The legal voting age in the United States is 18. 
 * (- 미국에서 합법적으로 투표를 할 수 있는 나이는 18살 입니다.)
 * 
 
*/

function isPersonOldEnoughToVote(person) {
  
}


/** 
 * # 08_removeNumbersLargerThan
 * 
 * Write a function called "removeNumbersLargerThan". 
 * ("removeNumbersLargerThan" 함수를 작성하세요.)
 * 
 * Given a number and an object, "removeNumbersLargerThan" 
 * removes any properties whose values are numbers greater
 *  than the given number. 
 * 
 * (숫자와 객체가 주어졌을때, "removeNumbersLargerThan" 함수는 주어진 
 * 객체에서 주어진 숫자보다 큰 모든 숫자 속성을 제거합니다.)
 * 
 * let obj = {
 *  a: 8,
 *  b: 2,
 *  c: 'montana'
 * }
 * removeNumbersLargerThan(5, obj);
 * console.log(obj); // --> { b: 2, c: 'montana' }
 
*/

function removeNumbersLargerThan(num, obj) {
  
}


/** 
 * # 09_removeOddValues
 
 * Write a function called "removeOddValues". 
 * ("removeOddValues" 함수를 작성하세요.)
 * Given an object, "removeOddValues" removes any properties 
 * whose values are odd numbers. 
 * (객체가 주어졌을때, "removeOddValues" 함수는 주어진 
 * 객체의 속성값이 홀수인 속성을 모두 제거합니다.)
 * 
 * let obj = {
 *  a: 2,
 *  b: 3,
 *  c: 4
 * };
 * 
 * removeOddValues(obj);
 * console.log(obj); // --> { a: 2, c: 4 }
 
 
*/

function removeOddValues(obj) {
  
}

/** 
 * # 10_countNumberOfKeys
 * 
 * Write a function called "countNumberOfKeys". 
 * ("countNumberOfKeus" 함수를 작성하세요.)
 * 
 * Given an object, "countNumberOfKeys" returns 
 * how many properties the given object has. 
 * (객체가 주어졌을때, "countNumberOfKeys" 함수는 객체안에
 *  있는 속성들의 갯수를 반환합니다.)
 * 
 * let obj = {
 *  a: 1,
 *  b: 2,
 *  c: 3
 * };
 * 
 * let output = countNumberOfKeys(obj);
 * console.log(output); // --> 3
 
 
*/

function countNumberOfKeys(obj) {
  
}

/** 
 * # 11_printObject
 * 
 * printObject 함수를 작성하세요
 * 
 * 객체를 파라미터로 받는 printObject 함수는 객체 안에 정의된 키와 값 쌍을 
 * 조합한 문자열을 리턴합니다. 
 * 문자열은 한 줄에 하나의 키/값 쌍을 콜론(:) 및 공백문자와 함께 표시하며, 
 * 또다른 키/값 쌍 사이에는 줄바꿈 문자가 포함되어 있습니다.
 * 
 * 노트:
 * - 줄바꿈 문자는 \n로 표현됩니다. hello\nworld 의 출력은 다음과 같습니다
 * hello
 * world
 * 
 * - 객체를 탐색하는 반복문은 for ... in 구문을 이용합니다
 * - for ... in 구문은 MDN을 이용해 검색해보세요.
 * 
 * let obj = { name: 'Steve', age: 13, sex: 'Male' };
 * let output = printObject(obj);
 * console.log(output);
 * 
 * 
 * - 다음과 같은 내용이 콘솔에 출력됩니다.
 * name: Steve
 * age: 13
 * sex: Male
 * - 콜론 사이에 공백을 주의하세요.
 * - 문자열에 맨 마지막에 줄바꿈을 포함합니다. 
 * (위 콘솔 출력을 줄바꿈 문자로 표시하면 다음과 같습니다.)
 * name: Steve\nage: 13\nsex: Male\n
 
*/

function printObject(obj) {
  
}

/** 
 * # 12_extends
 * 
 * Write a function called "extend". ("extend" 함수를 작성하세요.)
 * 
 * Given two objects, "extend" adds properties from the 2nd object
 * to the 1st object.
 * (객체 두개가 주어졌을때, "extend" 함수는 두번째 객체의 속성을
 * 첫번째 객체에 추가해야 합니다
 * 
 * Notes:
 * Add any keys that are not in the 1st object. 
 * (첫번째 객체에 없는 모든 키를 추가하세요.
 * 
 * If the 1st object already has a given key, ignore it 
 * (do not overwrite the property value). 
 * (만약 첫번째 객체에 이미 있는 키라면, 값을 덮어쓰지 말고 무시하세요.
 * 
 * Do not modify the 2nd object at all. (두번째 객체는 수정하지 마세요.)
 * let obj1 = 
 *  a: 1
 *  b: 2
 * };
 * let obj2 = {
 *   b: 4,
 *   c: 3
 * };

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
 
*/

function extend(obj1, obj2) {
  
}


/** 
 * # 13_countAllCharacters
 * 
 * Write a function called "countAllCharacters". ("countAllCharacters" 함수를 작성하세요")
 * 
 * Given a string, "countAllCharacters" returns an object 
 * where each key is a character in the given string. 
 * The value of each key should be 
 * how many times each character appeared in the given string. 
 * (문자열이 주어졌을때, "countAllCharacters" 함수는 주어진 문자열의 
 * 각각의 문자를 키로 가지는 객체를 반환합니다. 
 * 각 키의 값은 해당 문자가 주어진 문자열에서 몇번 나오는지를 나타냅니다.)
 * 
 * Notes:
 * 
 * If given an empty string, countAllCharacters should
 *  return an empty object. 
 * (만약 빈 문자열이 주어졌다면, "countAllCharacters" 
 * 함수는 빈 객체를 반환해야 합니다.)
 * 
 * let output = countAllCharacters('banana');
 * console.log(output); // --> {b: 1, a: 3, n: 2}
 * 
 
*/

function countAllCharacters(str) {
  
}