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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
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
  // 여기에 코드를 작성하세요
}

// # 08_getElementsUpTo

// Write a function called "getElementsUpTo". 
// ("getElementsUpTo" 함수를 작성하세요.)

// Given an array and a index, "getElementsUpTo", 
// returns an array with all the elements up until, 
// but not including, the element at the given index. 
// (배열과 인덱스가 주어졌을때, "getElementsUpTo"
// 함수는 주어진 배열의 인덱스 이전 요소들을 (자신은 포함하지 않고) 
// 새로운 배열로 반환해야 합니다.)

// Notes:

// In order to do this you should be familiar with the 'slice' method. 
// (- 위 문제를 해결하기 위해서는 'slice' 메소드에 익숙하셔야 합니다.)

// let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
// console.log(output); // --> ['a', 'b', 'c']

function getElementsUpTo(array, n) {
  // 여기에 코드를 작성하세요
}

// # 09_getAllElementsButFirst

//Write a function called "getAllElementsButFirst". 
//("getAllElementsButFirst" 함수를 작성하세요.)

//Given an array, "getAllElementsButFirst" returns an array 
//with all the elements but the first. 
// (배열이 주어졌을때, "getAllElementsButFirst" 함수는 첫번째 요소를 제외한 배열을 반환해야 합니다.)

// let input = [1, 2, 3, 4];
// let output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(array) {
  // 여기에 코드를 작성하세요
}

// # 10_getAllElementsButLast

// Write a function called "getAllElementsButLast". 
// ("getAllElementsButLast" 함수를 작성하세요.)

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last. 
// (배열이 주어졌을때, "getAllElementsButLast" 함수는 마지막 요소를 제외한 배열을 반환해야 합니다.)

// let input = [1, 2, 3, 4];
// let output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]

function getAllElementsButLast(array) {
  // 여기에 코드를 작성하세요
}


// # 11_removeFromFront

// Write a function called "removeFromFront". ("removeFromFront" 함수를 작성하세요.)

// Given an array, "removeFromFront" returns the given array 
// with its first element removed. 
// (배열이 주어졌을때, "removeFromFront" 함수는 첫번째 요소를 삭제한 주어진 배열을 반환해야 합니다.)

// Notes:

// You should be familiar with the method 'shift'. 
// (- 위 문제를 해결하기 위해서는 'shift' 메소드에 익숙하셔야 합니다.)

// let output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

function removeFromFront(arr) {
  // 여기에 코드를 작성하세요
}

// # 12_removeFromBack

// Write a function called "removeFromBack". ("removeFromBack" 함수를 작성하세요.)

// Given an array, "removeFromBack" returns the given array 
// with its last element removed. 
// (배열이 주어졌을때, "removeFromBack" 함수는 마지막 요소를 삭제한 주어진 배열을 반환해야 합니다.)

// Notes:
// You should be familiar with the method 'pop'. 
// (- 위 문제를 해결하기 위해서는 'pop' 메소드에 익숙하셔야 합니다.)

function removeFromBack(arr) {
  // 여기에 코드를 작성하세요
}

// # 13_removeFromBackOfNew

// Write a function called "removeFromBackOfNew". 
// ("removeFromBackOfNew" 함수를 작성하세요.)

// Given an array, "removeFromBackOfNew" returns 
// a new array containing all but the last element of the given array. 
// (배열이 주어졌을때, "removeFromBackOfNew" 함수는 
// 마지막 요소를 제외한 모든 요소를 가지고 있는 새로운 배열을 반환해야 합니다.)

// Notes:
// You should be familiar with the 'slice' method. 
// (- 위 문제를 해결하기 위해서는 'slice' 메소드에 익숙하셔야 합니다.)

// let arr = [1, 2, 3];
// let output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]

function removeFromBackOfNew(arr) {
  // 여기에 코드를 작성하세요
}


// # 14_addToBackOfNew

// Write a function called "addToBackNew". 
// ("addToBackNew" 함수를 작성하세요.)

// Given an array and an element, "addToBackNew" returns 
// a clone of the given array, with the given element added to the end. (배열과 요소가 주어졌을때, "addToBackNew" 
// 함수는 주어진 배열의 복사본 끝에 주어진 요소가 추가된 배열을 반환합니다.)

// Important: It should be a NEW array instance, not the original array instance.

// let input = [1, 2];
// let output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

function addToBackOfNew(arr, element) {
  // 여기에 코드를 작성하세요
}


// # 15_addToFrontOfNew

// Write a function called "addToFrontOfNew".
//  ("addToFrontOfNew" 함수를 작성하세요.)

// Given an array and an element, "addToFrontOfNew" 
// returns a new array containing all the elements 
// of the given array, with the given element added to the front. 
// (배열과 요소가 주어졌을때, "addToFrontOfNew" 
// 함수는 주어진 요소가 맨앞에 있고 기존 배열의 요소를 모두 담고 있는 새로운 배열을 반환합니다.)

// Important: It should be a NEW array instance, 
// not the original array instance.

// let input = [1, 2];
// let output = addToFrontOfNew(input, 3);
// console.log(output); --> [3, 1, 2];
// console.log(input); --> [1, 2]

function addToFrontOfNew(arr, element) {
  // 여기에 코드를 작성하세요
}

// # 16_joinArrayOfArrays

// Write a function called "joinArrayOfArrays". 
// ("joinArrayOfArrays" 함수를 작성하세요.)

// Given an array of arrays, "joinArrayOfArrays" returns a single array 
// containing the elements of the nested arrays. 
// (배열들의 배열이 주어졌을때, "joinArrayOfArrays" 함수는 
// 배열들의 요소를 모두 담고 있는 단일 배열을 반환합니다.)

// let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
  // 여기에 코드를 작성하세요
}

// # 17_getAllElementsButNth

// Write a function called "getAllElementsButNth". 
// ("getAllElementsButNth" 함수를 작성하세요.)

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth. 
// (배열과 인덱스가 주어졌을때, "getAllElementsButNth" 함수는 해당 인덱스의 요소를 제외한 배열을 반환합니다.)

// let output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

function getAllElementsButNth(array, n) {
  // 여기에 코드를 작성하세요
 }

// # 18_getAllLetters

// Write a function called "getAllLetters". 
// ("getAllLetters" 함수를 작성하세요.)

// Given a word, "getAllLetters" returns an array containing every character in the word.
//  (단어가 주어졌을때, "getAllLetters" 함수는 주어진 단어에 포함된 모든 문자를 담고 있는 배열을 반환합니다.)

// Notes:

// If given an empty string, it should return an empty array. 
// (만약 빈 문자열이 주어졌다면, 빈 배열을 반환해야 합니다.)

// let output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllLetters(str) {
  // 여기에 코드를 작성하세요
}

// # 19_getAllWords

// Write a function called "getAllWords". 
// ("getAllWords" 함수를 작성하세요.)

// Given a sentence, "getAllWords" returns an array containing 
// every word in the sentence. 
// (문장이 주어졌을때, "getAllWords" 함수는 주어진 문장에 포함된 
// 모든 단어를 담고 있는 배열을 반환합니다.)

// Notes:
// If given an empty string, it should return an empty array.

// let output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
  // 여기에 코드를 작성하세요
}


// # 20_findShortestWordAmongMixedElements
// Write a function called "findShortestWordAmongMixedElements". 
// ("findShortestWordAmongMixedElements" 함수를 작성하세요.)

// Given an array, "findShortestWordAmongMixedElements" 
// returns the shortest string within the given array. 
// (배열이 주어졌을때, "findShortestWordAmongMixedElements" 
// 함수는 주어진 배열에서 가장 짧은 문자열을 반환합니다.)

// Notes:
// If there are ties, it should return the first element 
// to appear in the given array. 
// (만약 동률이 있다면, 배열의 앞쪽에 있는 요소를 반환해야 합니다.)

// Expect the given array to have values other than strings. 
// (주어진 배열에는 문자열 외에 다른 값들이 있을 수 있습니다.)

// If the given array is empty, it should return an empty string. 
// (만약 빈배열이 주어졌다면, 빈 문자열을 반환해야 합니다.)

// If the given array contains no strings, 
// it should return an empty string. 
// (만약 주어진 배열에 문자열이 없다면, 빈 문자열을 반환해야 합니다.)

// let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
  // 여기에 코드를 작성하세요
}

// # 21_removeElement

// Write a function called "removeElement". 
// ("removeElement" 함수를 작성하세요.)

// Given an array of elements, and a "discarder" parameter, 
// "removeElement" returns an array containing the items 
// in the given array that do not match the "discarder" parameter. 
// (배열과 "discarder" 매개변수가 주어졌을때, "removeElement" 함수는 
// 주어진 배열에서 "discarder" 매개변수와 일치하지 않는 모든 요소를 포함하는 배열을 
// 반환합니다.)

// let output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]

function removeElement(array, discarder) {
  // 여기에 코드를 작성하세요
}


// # 22_keep

// Write a function called "keep". ("keep" 함수를 작성하세요.)

// Given an array and a keeper element, "keep" 
// returns an array containing the items 
// that match the given keeper element. 
// (배열과 "keeper" 매개변수가 주어졌을때, "keep" 함수는 
// "keeper" 매개변수와 일치하는 모든 요소를 포함하는 배열을 반환합니다.)

// Notes:

// If no elements match, "keep" should return an empty array. 
// (만약 아무것도 일치하지 않는다면, "keep" 함수는 빈 배열을 반환해야 합니다.)

// let output = keep([1, 2, 3, 2, 1], 2) 
// console.log(output); --> [2, 2]

function keep(array, keeper) {
 // 여기에 코드를 작성하세요
}

// # 23_findSmallestElement

// Write a function called "findSmallestElement". 
// ("findSmallestElement" 함수를 작성하세요.)

// Given an array of numbers, "findSmallestElement" 
// returns the smallest number within the given array. 
// (숫자의 배열이 주어졌을때, "findSmallestElement" 
// 함수는 주어진 배열에서 가장 작은 수를 반환합니다.)

// Notes:
// If the given array is empty, it should return 0. 
// (만약 빈 배열이 주어졌다면, 0을 반환해야 합니다.)

// let output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

function findSmallestElement(arr) {
  // 여기에 코드를 작성하세요
}

// # 24_computeSumOfAllElements

// Write a function called "computeSumOfAllElements". 
// ("computeSumOfAllElements" 함수를 작성하세요.)

// Given an array of numbers, "computeSumOfAllElements" 
// returns the sum of all the elements in the given array. 
// (숫자의 배열이 주어졌을때, "computeSumOfAllElements" 함수는 
// 주어진 배열의 모든 요소의 합을 반환합니다.)

// let output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

function computeSumOfAllElements(arr) {
  // 여기에 코드를 작성하세요
}

// # 25_computeProductOfAllElements

// Write a function called "computeProductOfAllElements". 
// ("computeProductOfAllElements" 함수를 작성하세요.)

// Given an array of numbers, "computeProductOfAllElements" 
// returns the products of all the elements in the given array. 
// (숫자의 배열이 주어졌을때, "computeProductOfAllElements" 함수는 
// 주어진 배열의 모든 요소의 곱을 반환합니다.)

// Notes:
// If given array is empty, it should return 0. (만약 빈 배열이 주어졌다면, 0을 반환해야 합니다.)

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

function computeProductOfAllElements(arr) {
  // 여기에 코드를 작성하세요
}

// # 26_getLengthOfLongestElement

// Write a function called "getLengthOfLongestElement". 
// ("getLengthOfLongestElement" 함수를 작성하세요.)

// Given an array, "getLengthOfLongestElement" returns 
// the length of the longest string in the given array. 
// (배열이 주어졌을때, "getLengthOfLongestElement" 
// 함수는 주어진 배열에서 가장 긴 문자열의 길이를 반환합니다.)

// Notes:
// It should return 0 if the array is empty. 
// (만약 배열이 비어있다면, 0을 반환해야 합니다.)

// let output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
  // 여기에 코드를 작성하세요
}

// # 27_getLongestElement

// Write a function called "getLongestElement". 
// ("getLongestElment" 함수를 작성하세요.)

// Given an array, "getLongestElement" 
// returns the longest string in the given array. 
// (배열이 주어졌을때, "getLongestElement" 
// 함수는 주어진 배열에서 가장 긴 문자열을 반환합니다.)

// Notes:
// If there are ties, it returns the first element to appear. 
// (만약 동률이 있다면, 앞쪽에 있는 요소를 반환해야 합니다.)

// If the array is empty, it should return an empty string. 
// (만약 배열이 비어있다면, 빈 문자열을 반환해야 합니다.)

// let output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

function getLongestElement(arr) {
  // 여기에 코드를 작성하세요
}

// # 28_filterOddLengthWords

// Write a function called "filterOddLengthWords". 
// ("filterOddLengthWords" 함수를 작성하세요.)

// Given an array of string, "filterOddLengthWords" 
// returns an array containing only the elements 
// of the given array whose lengths are odd numbers. 
// (문자열의 배열이 주어졌을때, "filterOddLengthWords" 함수는 
// 주어진 배열의 요소 중 문자열의 길이가 홀수인 문자열만을 요소로 가지는 배열을 반환합니다.)

// let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', 'now']

function filterOddLengthWords(words) {
  // 여기에 코드를 작성하세요
}
