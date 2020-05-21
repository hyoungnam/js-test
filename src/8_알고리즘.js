// SpecRunner를 활용하여서 조건을 만족시키세요.

// # 001_convertArrayToObject1

// Write a function 'transformFirstAndLast' that takes in an array, 
// and returns an object with: 
// (배열을 입력으로 받고 다음 조건에 만족하는 객체를 반환하는 함수 
// 'transformFirstAndLast' 함수를 작성하세요.)

// the first element of the array as the object's key, 
// and (1. 배열의 첫번째 요소를 객체의 키로 가집니다.)

// Example input: (input의 예시입니다.)
// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

// Function's return value (output): (예상하는 output 값입니다.)
// {
//   Queen: 'Beyonce';
// }

// Do not change the input array. Assume all elements in the 
// input array will be of type 'string'. 
// (입력으로 받는 배열은 수정하지 마세요. 
// 입력으로 받는 배열의 요소들은 모두 문자열 타입입니다.)

// Note that the input array may have a varying number of elements. 
// Your code should flexibly accommodate that. 
// (입력으로 받는 배열의 크기는 다양 할 수 있다는 점을 유의하세요. 
// 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)

// E.g. it should handle input like:
// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];

// Function's return value (output):
// {
//   Kevin: 'Spacey';
// }

function transformFirstAndLast(arr) {
  
}

// # 002_convertObjectToArray1.js

// Write a function called "getAllKeys" 
// which returns an array of all the input object's keys. 
// (객체를 입력으로 받고 해당 객체의 키들을 배열로 반환하는 "getAllKeys" 함수를 작성하세요.)

// Example input:
// {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// }
// Function's return value (output) :
// ['name', 'age', 'hasPets'];

// Do not use "Object.keys" to solve this prompt. 
// (이 문제를 풀기위해 "Object.keys"를 사용하지 마세요.)

// Note that your function should be able to handle any object passed in it. 
// (여러분이 작성한 함수는 어떠한 객체가 주어져도 처리가 가능해야 합니다.)

// E.g. it should also handle an input like:
// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function's return value (output):
// ['a', 'number', 'hungry', 'grammyWins'];

function getAllKeys(obj) {
  
}

// # 003_convertArrayToObject2

// Write a function 'fromListToObject' 
// which takes in an array of arrays, 
// and returns an object with each pair 
// of elements in the array as a key-value pair. 
// (2차원 배열을 입력으로 받고 배열안에 있는 
// 배열의 요소 페어를 키-값 페어로 가지는 객체를 반환하는 함수 
// 'fromListToObject' 함수를 작성하세요.)

// Example input:
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// Function's return value (output):
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : 1964
// }

// Do not change the input string. Assume that all elements 
// in the array will be of type 'string'. 
// (입력으로 받는 문자열은 수정하지 마세요. 
// 입력으로 받는 배열의 요소들은 모두 문자열 타입입니다.)

// Note that the input may have a different number of elements 
// than the given sample. 
// (입력으로 받는 배열의 크기는 다양할 수 있다는 점을 유의하세요.) 
// For instance, if the input had 6 values instead of 4, 
// your code should flexibly accommodate that. 
// (예를들어, 입력값에 4개 대신 6개의 요소가 있다면, 
// 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)

function fromListToObject(arr) {
  
}

// # 004_convertObjectToArray2

// Write a function called "listAllValues" which 
// returns an array of all the input object's values. 
// (객체를 입력으로 받고 해당 객체의 값들을 배열로 반환하는 
// "listAllValues" 함수를 작성하세요.)

// Example input:
// {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }

// Function's return value (output):
// ['Krysten', 33, false];

// Note that the input may have a different number of keys and values 
// than the given sample. 
// (입력으로 받을 객체의 키-값 수는 
// 예시에서 보여준 키-값의 수와 다를 수 있다는 점에 유의하세요.)

// E.g. it should also handle an input like:
// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }

// Function's return value (output):
// ['a', 11, true, 1];

function listAllValues(obj) {
  
}



// # 005_convertArrayToObject3

// Write a function called "transformEmployeeData" 
// that transforms some employee data 
// from one format to another. 
// (사원들의 정보를 다른 형태로 변형 할 수 있는 함수 
// "transformEmployeeData" 함수를 작성하세요.)

// The argument will look something like this: 
// (사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.)

// [
//   [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
//   [
//     ['firstName', 'Mary'],
//     ['lastName', 'Jenkins'],
//     ['age', 36],
//     ['role', 'manager']
//   ]
// ];

// Given that input, the return value should look like this: 
// (위의 배열이 input으로 주어진다면, 다음과 같은 output을 리턴해야합니다.)

// [
//   { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//   { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
// ];

// Note that the input may have a different number of 
// rows or different keys than the given sample. 
// (입력값에는 예시와 다른 키값들이 있을 수도 있고 사원수가 다를 수도 있습니다.)

// For example, let's say the HR department adds a "tshirtSize" 
// field to each employee record. 
// Your code should flexibly accommodate that. 
// (예를들어, 인사팀에서 "tshirtSize"를 각 사원들의 정보에 넣었다면, 
// 여러분의 코드는 해당 사항을 유연히 대처 할 수 있어야 합니다.)

function transformEmployeeData(arr) {
  
}

// 007_greetCustomers.js

// Write a function called "convertObjectToList" which converts an 
// object literal into an array of arrays, like this: 
// (객체를 입력으로 받고 해당 객체를 다음과 같이 
// 2차원 배열로 변형 할 수 있는 함수 "convertObjectToList"를 작성하세요.)

// Argument:
// {
// 	name: 'Holly',
// 	age: 35,
// 	role: 'producer'
// }

// Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']];

// Note that your function should be able to 
// handle ANY object like this, not just the exact sample provided above.
// (여러분이 작성하신 함수는 위에 제시된 예시 뿐만 아니라 어떠한 객체도 다룰 수 있어야 합니다.)

// Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this: (객체를 입력으로 받고 해당 객체를 다음과 같이 2차원 배열로 변형 할 수 있는 함수 "convertObjectToList"를 작성하세요.)

// Argument:
// { 
// name: 'Holly',
// age: 35,
// role: 'producer'
// }
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']];
// Note that your function should be able to handle ANY object like this, not just the exact sample provided above. (여러분이 작성하신 함수는 위에 제시된 예시 뿐만 아니라 어떠한 객체도 다룰 수 있어야 합니다.)


// 007_greetCustomers

// Write a function called "greetCustomer". 
// ("greetCustomer" 함수를 작성하세요.)

// Given a name, "greetCustomer" returns a greeting 
// based on how many times that customer has visited the restaurant. 
// Please refer to the customerData object. 
// (고객들의 방문 횟수를 가지고 있는 객체와 이름이 주어졌을때, 
// "greetCustomer" 함수는 손님이 몇번 방문했는지에 따라 다른 인삿말을 반환합니다. 
// customerData 객체를 참고해 주세요.)

// customerData의 형식은 아래와 같습니다.

// let customerData = {
//   Joe: {
//     visits: 1
//   },
//   Carol: {
//     visits: 2
//   },
//   Howard: {
//     visits: 3
//   },
//   Carrie: {
//     visits: 4
//   }
// };

// The greeting should be different, depending on the name on their 
// reservation. (손님들의 예약에 나타나 있는 이름에 따라 인삿말이 달라야 합니다.)

// Case 1 - Unknown customer ( Name is not present in customerData ): 
// (상황 1 - 처음 방문한 손님 (customerData에 이름이 없을경우):)
// let output = greetCustomer(customerData, 'Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'

// Case 2 - Customer who has visited only once 
// ('visits' value is 1 ): (상황 2 - 한번 방문했던적이 있는 손님 ('visits'의 값이 1인 경우):)
// let output = greetCustomer(customerData, 'Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ): 
// (상황 3 - 여러번 방문한 손님 ('visits'의 값이 1보다 큰 경우):)
// let output = greetCustomer(customerData, 'Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

// Notes:
// Your function should not alter the customerData 
// object to update the number of visits. 
// (- 여러분의 함수는 방문수를 업데이트 하기위해 
// customerData 객체를 수정하여서는 안됩니다.)

// Do not hardcode to the exact sample data. 
// This is a BAD IDEA: (샘플 데이터를 하드코딩 하지 마세요. 좋지 않은 생각입니다.)

function greetCustomer(customerData, firstName) {
  
}

// # a001_convertDoubleSpaceToSingle

// Write a function called "convertDoubleSpaceToSingle". 
// ("convertDoubleSpaceToSingle" 함수를 작성하세요.)

// Given a string, "convertDoubleSpaceToSingle" returns the passed 
// in string, with all the double spaces 
// converted to single spaces. 
// (문자열이 주어졌을때, "convertDoubleSpaceToSingle" 함수는 
// 주어진 문자열에 있는 띄어쓰기 두개(double spaces)를 
// 띄어쓰기 한개(single space)로 변환한 뒤 해당 문자열을 반환합니다.)

// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); // --> "string with double spaces"

function convertDoubleSpaceToSingle(str) {
  
}


// a002_getIndexOf.js

// Write a function called "getIndexOf".
// ("getIndexOf" 함수를 작성하세요.)

// Given a character and a string, "getIndexOf" 
// returns the first position of the given character 
// in the given string. 
// (문자와 문자열이 주어졌을때, "getIndexOf" 함수는 
// 주어진 문자열에서 주어진 문자가 나타나는 첫번째 위치를 반환합니다.)

// Notes:
// Strings are zero indexed, meaning the first character 
// in a string is at position 0.
//  (- 문자열의 첫번째 문자는 인덱스 값 0 을 가집니다.)

// When a string contains more than one occurrence of a character, 
// it should return the index of its first occurrence. 
// (- 만약 문자열에 해당 문자가 여러번 나타나면, 첫번째로 나타나는 위치를 반환해야 합니다.)

// If the character does not exist in the string, 
// it should return -1. 
// (- 만약 문자가 문자열에 존재하지 않는다면, -1 을 반환해야 합니다.)

// Do not use the native indexOf 
// function in your implementation. (- indexOf 함수를 사용하지 마세요.)

// let output = getIndexOf('a', 'I am a hacker');
// console.log(output); // --> 2

function getIndexOf(char, str) {
  
}

// # a003_calculateBillTotal

// Write a function called "calculateBillTotal". 
// ("calculateBillTotal" 함수를 작성하세요.)

// Given the pre tax and pre tip amount of a meal, 
// "calculateBillTotal" returns the total amount 
// due after tax and tip. 
// (팁과 세금을 제외한 식사값이 주어졌을때, 
// "calculateBillTotal" 함수는 팁과 세금이 포함된 총 식사값을 반환합니다.)

// Notes:
// Assume that sales tax is 9.5% and tip is 15%.
// (- 세금은 9.5% 팁은 15% 로 계산하세요.)

// Do NOT tip on the sales tax, only on the pre tip amount. 
// (- 팁을 계산할때 세금을 포함하여 계산하지 마세요.)

// let output = calculateBillTotal(20);
// console.log(output); // --> 24.9

function calculateBillTotal(preTaxAndTipAmount) {
  
}

// # a004_getStringLength

// Write a function called "getStringLength". 
// ("getStringLength" 함수를 작성하세요.)

// Given a string, "getStringLength" returns 
// the length of the given string. 
// (문자열이 주어졌을때, "getStringLength" 함수는 주어진 문자열의 길이를 반환합니다.)

// Notes:
// Do NOT use any native 'length' methods. 
// (- 'length' 메소드를 사용하지 마세요.)

// let output = getStringLength('hello');
// console.log(output); // --> 5

function getStringLength(string) {
  
}

// # a005_sumDigits

// Write a function called "sumDigits". 
// ("sumDigits" 함수를 작성하세요.)

// Given a number, "sumDigits" returns the sum of all its digits.
// (숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.)

// let output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative. 
// (만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.)

// let output = sumDigits(-316);
// console.log(output); // --> 4

// Notes:
// In order to use some of the methods that will be most 
// helpful to you, you will most likely want to do some string 
// to number conversion and vice versa. 
// (- 여러분에게 도움이 될 메소드를 사용하기위해서는 
// 아마도 문자열을 숫자로 바꾸거나 숫자를 문자로 바꾸는게 수월하실 겁니다.)

// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function. 
// ("Number" 함수와 "toString" 메소드에 꼭 익숙해지세요.)

function sumDigits(num) {
  
}
// # a006 생략

// # a007_modulo

// Write a function called "modulo". ("modulo" 함수를 작성하세요.)

// Given 2 numbers, "modulo" returns the remainder 
// after dividing num1 by num2. 
// (두 숫자가 주어졌을때, "modulo" 
// 함수는 첫번째 수를 두번째 수로 나눴을때 나머지 값을 반환합니다.)

// It should behave as described in the canonical documentation 
// (MDN) for the JavaScript remainder operator: 
// (아래 문서에서 설명된 자바스크립트의 나머지 연산자 처럼 동작해야 합니다.) 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/ArithmeticOperators#Remainder()

// Notes:
// Do NOT use the actual built-in modulo (aka "remainder") 
// operator (%) in your implementation. 
// (- 이미 구현되어 있는 나머지 연산자(%)를 사용하지 마세요.)

// 0 % ANYNUMBER = 0. (- 0 & 아무숫자 = 0)
// ANYNUMBER % 0 = NaN. (- 아무숫자 % 0 = NaN)
// If either operand is NaN, then the result is NaN. 
// (- 두 수중 하나라도 NaN 이라면, 결과값은 NaN 입니다.)

// Modulo always returns the sign of the first number. 
// (modulo 함수는 항상 첫번째 숫자의 +/- 값을 반환합니다.)

// let output = modulo(25, 4);
// console.log(output); // --> 1

function modulo(num1, num2) {
  
}

// # a008_isOddWithoutModulo

// Write a function called "isOddWithoutModulo". 
// ("isOddWithoutModulo" 함수를 작성하세요.)

// Given a number, "isOddWithoutModulo" returns 
// whether the passed in number is odd. 
// (숫자가 주어졌을때, "isOddWithoutModulo" 함수는 주어진 숫자가 홀수인지를 반환합니다.)

// Note:
// It does so without using the modulo operator (%). 
// (- 나머지 연산자(%)를 사용하지 마세요.)

// It should work for negative numbers and zero. 
// (- 0과 음수가 주어져도 동작해야 합니다.)

function isOddWithoutModulo(num) {
  
}

// # a009 생략

// # a010_multiplyBetween
// Write a function called "multiplyBetween". 
// ("multiplyBetween" 함수를 작성하세요.)

// Given 2 integers, "multiplyBetween" returns the product 
// between the two given integers, beginning at num1, 
// and excluding num2. (두 정수가 주어졌을때, "multiplyBetween" 
// 함수는 첫번째 숫자부터 두번째 숫자 전까지 모든 수를 곱한 값을 반환합니다.)

// Notes:
// The product between 1 and 4 is 1 2 3 = 6.
// (1과 4 사이의 곱은 1 2 3 = 6 입니다.)

// If num2 is not greater than num1, it should return 0. 
// (만약 두번째 숫자가 첫번째 숫자보다 작다면, 0을 반환해야 합니다.)

// let output = multiplyBetween(2, 5);
// console.log(output); // --> 24

function multiplyBetween(num1, num2) {
 
}