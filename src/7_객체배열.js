
// SpecRunner를 활용하여서 조건을 만족시키세요.

// # 01_getElementOfArrayProperty

// Write a function called "getElementOfArrayProperty". 
// ("getElementOfArrayProperty" 함수를 작성하세요.)

// Given an object, a key, and a numerical index, 
// "getElementOfArrayProperty" returns 
// the value of the element at the given 
// index of the array located within the given object 
// at the given key. 
// (객체와 키, 그리고 숫자로된 인덱스값이 주어졌을때, 
// "getElementOfArrayProperty" 함수는 주어진 키에 위치한 
// 배열의 인덱스에 해당하는 값을 반환합니다.)

// Notes:

// If the array is empty, it should return undefined. 
// (만약 배열이 비었다면, undefined 를 반환해야 합니다.)

// If the given index is out of range of the array 
// located at the given key, it should return undefined. 
// (만약 주어진 인덱스 값이 키의 속성값의 범위를 넘어선다면, undefined 를 반환해야 합니다.)

// If the property at the given key is not an array, 
// it should return undefined. 
// (만약 주어진 키에 위치한 속성값이 배열이 아니라면, undefined 를 반환해야 합니다.)

// If there is no property at the key, it should return undefined. 
// (만약 주어진 키에 위치한 속성이 없다면, undefined 를 반환해야 합니다.)

// let obj = {
//   key: ['Jamil', 'Albrey']
//  };
//  let output = getElementOfArrayProperty(obj, 'key', 0); 
//  console.log(output); // --> 'Jamil


function getElementOfArrayProperty(obj, key, index) {
  
}

// # 02_select

// Write a function called "select". ("select" 함수를 작성하세요.)

// Given an array and an object, "select" returns a new object 
// whose properties are those in the given object 
// AND whose keys are present in the given array. 
// (배열과 객체가 주어졌을때, "select" 함수는 주어진 객체의 키값 중 
// 주어진 배열에 포함된 키값만을 속성으로 가지는 새로운 배열을 반환합니다.)

// Notes:

// If keys are present in the given array, 
// but are not in the given object, it should ignore them. 
// (만약 배열에는 있지만 객체에는 없는 키값이라면, 무시해야 합니다.)

// It does not modify the passed in object. 
// (주어진 객체가 변형되어서는 안됩니다.)

// let arr = ['a', 'c', 'e'];
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// let output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
  
}

// # 03_getElementsLessThan100AtProperty

// Write a function called "getElementsLessThan100AtProperty". 
// ("getElementsLessThan100AtProperty" 함수를 작성하세요.)

// Given an object and a key, "getElementsLessThan100AtProperty" 
// returns an array containing all the elements 
// of the array located at the given key that are less than 100. 
// (객체와 키값이 주어졌을때, "getElementsLessThan100AtProperty" 
// 함수는 주어진 키에 위치하는 배열에서 100 보다 
// 작은 값으로만 이루어진 배열을 반환합니다.)

// Notes:
// If the array is empty, it should return an empty array. 
// (만약 배열이 비었다면, 빈 배열을 반환해야 합니다.)

// If the array contains no elements less than 100, 
// it should return an empty array. 
// (만약 배열에 100 미만인 요소가 없다면, 빈 배열을 반환해야 합니다.)

// If the property at the given key is not an array, it should return an empty array. 
// (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.)

// If there is no property at the key, 
// it should return an empty array. 
// (만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.)

// let obj = {
//   key: [1000, 20, 50, 500]
// };
// let output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]

function getElementsLessThan100AtProperty(obj, key) {
  
}

// # 04_getNthElementOfProperty

// Write a function called "getNthElementOfProperty". 
// ("getNthElementOfProperty" 함수를 작성하세요.)

// Given an object and a key, "getNthElementOfProperty" 
// returns the nth element of an array located at the given key. 
// (객체와 키가 주어졌을때, "getNthElementOfProperty" 함수는 
// 주어진 키에 위차한 배열의 n번째 요소를 반환합니다.)

// Notes:
// If the array is empty, it should return undefined. 
// (만약 배열이 비어있다면, undefined를 반환해야 합니다.)

// If n is out of range, it should return undefined. 
// (만약 n 이 범위를 벗어난다면, undefined를 반환해야 합니다.)

// If the property at the given key is not an array, 
// it should return undefined. 
// (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, undefined를 반환해야 합니다.)

// If there is no property at the key, it should return undefined. 
// (만약 주어진 키에 위치하는 속성이 없다면, undefined를 반환해야 합니다.)

// let obj = {
//   key: [1, 2, 6]
// };
// let output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {
  
}


// # 05_getLastElementOfProperty

// Write a function called "getLastElementOfProperty". 
// ("getLastElementOfProperty" 함수를 작성하세요.)

// Given an object and a key, "getLastElementOfProperty" 
// returns the last element of an array located at the given key. 
// (객체와 키가 주어졌을때, "getLastElementOfProperty" 
// 함수는 주어진 키에 위치한 배열의 마지막 요소를 반환합니다.)

// Notes:
// If the array is empty, it should return undefined. 
// (만약 배열이 비어있다면, undefined를 반환해야 합니다.)

// If the property at the given key is not an array, it should return undefined. 
// (만약 주어진 키에 해당하는 속성값이 배열이 아니라면, undefined를 반환해야 합니다.)

// If there is no property at the key, it should return undefined. 
// (만약 주어진 키에 속성값이 없다면, undefined를 반환해야 합니다.)

// let obj = {
//   key: [1, 2, 5]
// };
// let output = getLastElementOfProperty(obj, 'key');
// console.log(output); // --> 5

function getLastElementOfProperty(obj, key) {
  
}

// # 06_getSquaredElementsAtProperty

// Write a function called "getSquaredElementsAtProperty".
//  ("getSquaredElementsAtProperty" 함수를 작성하세요.)

// Given an object and a key, "getSquaredElementsAtProperty" 
// returns an array containing all the squared elements of the array 
// located at the given key. 
// (객체와 키가 주어졌을때, "getSquaredElementsAtProperty" 
// 함수는 주어진 키에 위치하는 배열의 요소들의 제곱을 요소로 가지는 배열을 반환합니다.)

// Notes:
// If the array is empty, it should return an empty array. 
// (만약 배열이 비어있다면, 빈 배열을 반환해야 합니다.)

// If the property at the given key is not an array, it should return an empty array. 
// (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.)

// If there is no property at the key, it should return an empty array. 
// (만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.)

// let obj = {
//   key: [2, 1, 5]
// };
// let output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]

function getSquaredElementsAtProperty(obj, key) {
  
}

// # 07_getAllButLastElementOfProperty

// Write a function called "getAllButLastElementOfProperty". 
// ("getAllButLastElementOfProperty" 함수를 작성하세요.)

// Given an object and a key, "getAllButLastElementOfProperty" 
// returns an array containing all 
// but the last element of the array located at the given key. 
// (객체와 키가 주어졌을때, "getAllButLastElementOfProperty" 함수는 
// 주어진 키에 위치하는 배열의 마지막 요소를 제외한 배열을 반환합니다.)

// Notes:

// If the array is empty, it should return an empty array. 
// (만약 배열이 비어있다면, 빈 배열을 반환해야 합니다.)

// If the property at the given key is not an array, 
// it should return an empty array. 
// (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 빈 배열을 반환해야 합니다.)

// If there is no property at the key, 
// it should return an empty array. 
// (만약 주어진 객체에 주어진 키가 없다면, 빈 배열을 반환해야 합니다.)

// let obj = {
//   key: [1, 2, 3]
// };
// let output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]


function getAllButLastElementOfProperty(obj, key) {
  
}

// # 08_getProductOfAllElementsAtProperty

// Write a function called "getProductOfAllElementsAtProperty". 
// ("getProductOfAllElementsAtProperty" 함수를 작성하세요.)

// Given an object and a key, "getProductOfAllElementsAtProperty" 
// returns the product of all the elements in the array located at the given key. 
// (객체와 키가 주어졌을때, "getProductOfAllElementsAtProperty" 
// 함수는 주어진 키에 위치한 배열의 요소의 곱을 반환합니다.)

// Notes:
// If the array is empty, it should return 0. 
// (만약 배열이 비어있다면, 0을 반환해야 합니다.)

// If the property at the given key is not an array, 
// it should return 0. 
// (만약 주어진 키에 위치하는 속성값이 배열이 아니라면, 0을 반환해야 합니다.)

// If there is no property at the given key, it should return 0. 
// (만약 주어진 키에 위치하는 속성이 없다면, 0을 반환해야 합니다.)

// let obj = {
//   key: [1, 2, 3, 4]
// };
// let output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {
  
}
