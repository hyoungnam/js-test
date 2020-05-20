// SpecRunner를 활용하여서 조건을 만족시키세요.

// # 01_getFirstElement
// Write a function called "getFirstElement". ("getFirstElement" 함수를 작성하세요.)
// Given an array, "getFirstElement" returns the first element of the given array. 
// (배열이 주어졌을때, "getFirstElement" 함수는 주어진 배열의 첫번째 요소를 반환해야 합니다.)

// Notes:
// If the given array has a length of 0, it should return undefined. 
// (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)

// let output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

function getFirstElement(array) {
  if(array.length === 0) {
    return undefined;
  }
  return array[0];
}

// # 02_getLastElement
// Write a function called "getLastElement". 
// ("getLastElement" 함수를 작성하세요.)

// Given an array, "getLastElement" 
// eturns the last element of the given array. 
// (배열이 주어졌을때, "getLastElemeent"
//  함수는 주어진 배열의 마지막 요소를 반환해야 합니다.)

// Notes:
// If the given array has a length of 0, 
// it should return 'undefined'. 
// (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)

// let output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4

function getLastElement(array) {
  if(array.length === 0) 
    return undefined;
  return array[array.length-1];
}

// 03_getNthElement
// Write a function called "getNthElement". 
// ("getNthElement" 함수를 작성하세요.)

// Given an array and an integer, "getNthElement" 
// returns the element at the given integer, within the given array. 
// (배열과 숫자가 주어졌을때, "getNthElement" 
// 함수는 주어진 배열에서 n번 인덱스의 요소를 반환해야 합니다.)

// Notes:
// If the array has a length of 0, 
// it should return 'undefined'. 
// (- 만약 배열의 길이가 0이라면, 'undefined'를 반환해야 합니다.)

// let output = getNthElement([1, 3, 5], 1);
// // console.log(output); // --> 3


function getNthElement(array, n) {
  if(array.length === 0) 
    return undefined;
  return array[n];
}

// # 04_addToFront

// Write a function called "addToFront". 
// ("addToFront" 함수를 작성하세요.)

// Given an array and an element, "addToFront" adds 
// the given element to the front of the given array, 
// and returns the given array. 
// (배열과 요소가 주어졌을때, 
// "addToFront" 함수는 주어진 요소를 배열의 맨앞에 
// 추가하고 주어진 배열을 반환해야 합니다.)

// Notes:
// It should be the SAME array, not a new array. 
// (새로운 배열이 아닌 같은 배열을 리턴해야합니다.)

// let output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}

//#  05_addToBack
// Write a function called "addToBack". 
// ("addToBack" 함수를 작성하세요.)

// Given an array and an element, "addToBack" returns 
// the given array with the given element added to the end. 
// (배열과 요소가 주어졌을때, "addToBack" 
// 함수는 주어진 요소를 배열의 맨뒤에 추가하고 주어진 배열을 반환해야 합니다.)

// Note: It should be the SAME array, not a new array. 
// (새로운 배열이 아닌 같은 배열을 리턴해야합니다.)

// let output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

//# 06_joinArrays

// Write a function called "joinArrays". 
// ("joinArrays" 함수를 작성하세요.)

// Given two arrays, "joinArrays" returns an array 
// with the elements of "arr1" in order, followed 
// by the elementsin "arr2". (두 배열이 주어졌을때, "joinArrays" 
// 함수는 첫번째 배열(arr1)과 두번째 배열(arr2) 순서로 합쳐진 배열을 반환해야 합니다.)

// let output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]

// You should be familiar with the "concat" method for this problem. 
// (위 문제를 해결하기 위해서는 "concat" 메소드에 익숙하셔야 합니다.)

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// # 07_getElementsAfter

// Write a function called "getElementsAfter". 
// ("getElementsAfter" 함수를 작성하세요.)

// Given an array and an index, "getElementsAfter" returns 
// a new array with all the elements after (but not including) the given index.
//  (배열과 인덱스가 주어졌을때, "getElementsAfter" 함수는 
// 주어진 배열의 인덱스 이후 요소들을 (자신은 포함하지 않고) 새로운 배열로 반환해야 합니다.)

// let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']

function getElementsAfter(array, n) {
  let newArr = [];
  for (let i = n + 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}