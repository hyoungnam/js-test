// SpecRunner를 활용하여서 조건을 만족시키세요.

/** 
 * # 01_removeStringValues
 * 
 * Write a function called "removeStringValues".
 * ("removeStringValues" 함수를 작성하세요.)
 * 
 * Given an object, "removeStringValues" removes 
 * any properties on the given 
 * object whose values are strings. 
 * (객체가 주어졌을때, "removeStringValues" 함수는 속성값이 문자열인
 * 모든 속성을 제거합니다.)
 * 
 * let obj = {
 *  name: 'Sam',
 *  age: 20
 * }
 * removeStringValues(obj);
 * console.log(obj); // { age: 20 }
*/

function removeStringValues(obj) {
  
}


/** 
 * # 02_removeNumberValues
 * 
 * Write a function called "removeNumberValues". 
 * ("removeNumberValues" 함수를 작성하세요.)
 * 
 * Given an object, "removeNumberValues" removes
 *  any properties whose values are numbers. 
 * (객체가 주어졌을때, "removeNumberValues" 함수는 
 * 속성값이 숫자인 모든 속성을 제거합니다.)
 * 
 * let obj = {
 *  a: 2,
 *  b: 'remaining',
 *  c: 4
 * };
 * removeNumberValues(obj);
 * console.log(obj); // --> { b: 'remaining' }
 * 

*/
function removeNumberValues(obj) {
  
}

/** 
 * 03_removeArrayValues
 * 
 * Write a function called "removeArrayValues". 
 * ("removeArrayValues" 함수를 작성하세요.)
 * 
 * Given an object, "removeArrayValues" removes any properties 
 * whose values are arrays. (객체가 주어졌을때, "removeArrayValues" 
 * 함수는 속성값이 배열인 모든 속성을 제거합니다.)
 * 
 * let obj = {
 *   a: [1, 3, 4],
 *   b: 2,
 *   c: ['hi', 'there']
 * }
 * removeArrayValues(obj);
 * console.log(obj); // --> { b: 2 }
 * 
*/
function removeArrayValues(obj) {
  
}


/** 
 * # 04_getType
 
 * getType함수를 작성하세요
 * getType함수가 있습니다. 이 함수는 주어진 파라미터의 타입을 리턴합니다.
 * 
 * Note:
 * - 배열을 넘길 경우, 'object'라고 나올 수 있습니다. 배열과 객체는 어떻게 구분할 수 있을까요?
 * - 배열과 객체를 구분하려면 `Array.isArray` 메소드를 사용하면 됩니다.
 * 
 * let output = getType('hello');
 * console.log(output); // --> 'string'
 * 
 * let output2 = getType(10);
 * console.log(output2); // --> 'number'
 * 
 * let output3 = getType(true);
 * console.log(output3); // --> 'boolean'
 * 
 * let output4 = getType({ name: 'Steve' });
 * console.log(output4); // --> 'object'
 * 
 * let output5 = getType([100, 200, 300]);
 * console.log(output5); // --> 'array'
*/

function getType(anything) {
  
}

