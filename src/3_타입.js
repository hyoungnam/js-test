// SpecRunner를 활용하여서 조건을 만족시키세요.

/** 
 * # 01_convertToString
 * 
 * convertToString함수를 작성하세요. 
 * 이 함수는 주어진 파라미터를 문자열의 형태로 변환합니다.
 * 
 * 파라미터가 객체이거나, 배열일 경우는 신경쓰지 않아도 좋습니다
 * 
 * let output = convertToString(120);
 * console.log(output); // --> '120'
 * 
 * let output2 = convertToString('hello');
 * console.log(output2); // --> 'hello'
 * 
 * let output3 = convertToString(true);
 * console.log(output3); // --> 'true'
*/

function convertToString(anything) {
  
}


/** 
 * # 02_convertToNumber
 * 
 * 
 * convertToNumber함수를 작성하세요
 * 이 함수는 주어진 파라미터를 숫자의 형태로 변환합니다.
 * 
 * 노트:
 * - 숫자로 변환할 수 없는 경우, NaN (Not a number) 이라는 결과가 나올것입니다.
 * - NaN은 숫자가 아님을 나타내는 특수한 값으로, 문자열이 아닙니다.
 * 
 * let output = convertToNumber('123');
 * console.log(output); // --> 123
 * 
 * let output2 = convertToNumber('hello');
 * console.log(output2); // --> NaN
 * 
 * let output3 = convertToNumber('3.141952');
 * console.log(output3); // --> 3.141952

*/
function convertToNumber(anything) {
  
}

/** 
 * 03_isFalsy
 * isFalsy함수가 있습니다. falsy 값은, 거짓으로 취급되는 값을 의미합니다. 
 * 이 함수는 주어진 파라미터가 falsy값인지 아닌지를 평가합니다.
 * 
 * let output = isFalsy('hello');
 * console.log(output); // --> false
 * 
 * let output2 = isFalsy(0);
 * console.log(output2); // --> true
 * 
 * let output3 = isFalsy(true)
 * console.log(output3); // --> false
 * 
 * let output4 = isFalsy(undefined)
 * console.log(output4); // --> true
 * 
 * let output5 = isFalsy(NaN)
 * console.log(output5); // --> true
 * 
 * let output6 = isFalsy('')
 * console.log(output6); // --> true
 * 
*/
function isFalsy(anything) {
  
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

