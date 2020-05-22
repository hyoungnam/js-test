// SpecRunner를 활용하여서 조건을 만족시키세요.

// # Week 1-1 isOdd

// Write a function called isOdd. ("isOdd" 함수를 작성하세요.)
// Given an integer, isOdd returns whether the integer is odd or not. 
// (숫자가 주어졌을때, "isOdd" 함수는 주어진 숫자가 홀수 인지 아닌지를 반환합니다.)

// let output1 = isOdd(42);
// console.log(output1); // --> false

// let output2 = isOdd(19);
// console.log(output2); // --> true

function isOdd(num) {
  
}


// # Week 1-2 sum

// Summation to n: Let's implement the function sum that 
// takes a single parameter n, and computes the sum 
// of all integers up to n starting from 0, e.g.:

// (n까지의 총 합: n을 매개변수로 받아 0 부터 n 까지 
// 모든 수의 총 합을 반환하는 함수를 작성하세요.)

// sum(3); // => 6
// sum(4); // => 10
// sum(5); // => 15

function sum(n) {
  
}


// # Week 1-3 onlyEvenElements

// Given an array of numbers, onlyEvenElements returns a new array 
// of just the even numbers. 
// (숫자로 이루어진 배열이 주어졌을때, "onlyEvenElements" 함수는 
// 주어진 배열에 있는 짝수로만으로 이루어진 새로운 배열을 반환해야 합니다.)

function onlyEvenElements(arr) {
  
}


// # Week 1-4 removeOddValues

// Write a function removeOddValues that takes an object as an argument
//  and returns an object with all key/value pairs removed 
// for which the value holds an odd number. 
// ("removeOddValues" 함수를 작성하세요. 객체가 주어졌을때, 
// "removeOddValues" 함수는 주어진 객체의 key/value 페어 중 value 가 
// 홀수 숫자인 페어가 제거된 객체를 반환하세요.)

// You'll need to use the "typeof" operator to first check 
// that the values are numbers: 
// (value가 숫자인지 확인하기 위하서는 "typeof" 연산자를 먼저 사용해야 합니다.)

// typeof "Hello" // => ?
// typeof 3 // => ?

// removeOddValues({ a: 1, b: 2, c: 3, d: 'hello' }); // => { b: 2, d: 'hello' }
// removeOddValues({ a: 1, b: 2, c: '3' });           // => { b: 2, c: '3' }

function removeOddValues(object) {
  
}


// # Week 1-5 filteredArray

// return a new array that all elements passed testFunction 
// without using filter method 
// (filter 메소드를 사용하지 않고 testFunction 함수를 통과하는 요소로만 
// 이루어진 배열을 반환하는 함수를 작성하세요.)

// let isOdd = function (num) {
//   if (num%2) 
//     return true;
//   else 
//     return false;
// }
// filteredArray([1,2,3], isOdd) // [1, 3]

// tip : you don't have to make testFunction. 
// just use it in filteredArray function. 
// (팁: testFunction 을 작성할 필요는 없습니다. 
// 그냥 filteredArray 함수 안에서 바로 사용하세요.)

function filteredArray (array, testFunction) {
  
}


// # Week 2-1 ABCheck

// Using the JavaScript language, have the function ABCheck(str) 
// take the str parameter being passed and return the true 
// if the characters a and b are separated by exactly 3 places 
// anywhere in the string at least once Otherwise return the false.
//  (ABCheck(str) 함수를 작성하세요. 문자열(str)이 주어졌을때, ABCheck(str) 
// 주어진 문자열에서 함수는 문자 a 와 b 사이가 문자열 안에서 한번이라도 
// 정확히 3글자 떨어져 있으면 true를 반환하고 그렇지 않은 경우는 모두 false 를 반환합니다.)

// For example, lane Borrowed would result in true because there is 
// exactly three characters between a and B 
// (예를들어, lane Borrowed 문자열은 a 와 B 사이가 정확히 3글자 
// 떨어져 있으므로 true 를 반환하게 됩니다.)

// You should consider about space and capital character. 
// (문자 사이의 공백도 한글자로 취급하며, 
// 대문자 A와 B도 소문자와 동일하게 생각해주셔야합니다.)

// Please Note: you have to take care of undefined input case 
// (노트: undefined 를 매개변수로 넣는 케이스도 고려하셔야 합니다.)

function ABCheck(str) {
  
}


// # Week 2-2 firstReverse

// Using the JavaScript language, have the function firstReverse(str)
//  take the str parameter being passed and return 
// the string in reversed order. 
// (firstReverse(str) 함수를 작성하세요. 문자열(str)이 주어졌을때,
//  firstReverse(str) 함수는 주어진 문자열을 역순으로 반환합니다.)

// firstReverse("codestates"); // "setatsedoc"
// firstReverse("I love codestates"); // "setatsedoc evol I"

function firstReverse(str) {
  
}


// # Week 2-3 bugInApple 

// ind out "B"(Bug) in a lot of "A"(Apple). 
// (수많은 "A"(Apple) 사이에서 "B"(Bug)를 찾으세요.)

// There will always be one bug in apple, 
// not need to consider the situation 
// that without bug or more than one bugs. 
// (사과(apple) 사이에는 언제나 항상 한개의 
// 벌레(bug)가 있으므로 벌레가 없는 경우나 
// 한개 이상인 경우는 고려하지 않으셔도 됩니다.)

// Note: 2-dimesional Array will be input. 
// (노트: 2차원 배열이 매개변수로 주어집니다.)

// input:
// [["A","A","A","A","A"],["A","B","A","A","A"],
// ["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]

// output:
// [1,1]


let bugInApple = function(apple) {
  
}


// # Week 2-4 flatten

// convert nested (2-dimensional) array to flatten array! 
// (2차원 배열을 1차원 배열로 전환하세요.)

// Examples:
// flatten([1,2,[3],[4]]); // [1,2,3,4]

function flatten (array){
  
}

// # Week 3-1 firstCharacter 

// In this exercise, a string is passed to a method 
// and a new string has to be returned with the 
// first character of each word in the string 
// (문자열이 주어졌을때, "firstCharacter" 함수는 문자열의 
// 각 단어 첫글자들로 이루어진 문자열을 반환하여야 합니다.)

// Example:
// firstCharacter("The community at Code States
//  might be the biggest asset"); // => "TcaCSmbtba"

function firstCharacter(string) {
  
}


// # Week 3-2 longestWord *

// Using the JavaScript language, have the function LongestWord 
// take the sen parameter being passed and return the largest word 
// in the string. 
// (문장이 주어졌을때, 'LongestWord' 함수는 주어진 문장에서 가장 긴 단어를 반환합니다.)

// If there are two or more words that are the same length, 
// return the first word from the string with that length. 
// Assume sen will not be empty. 
// (만약 가장 긴 단어가 두개 이상이라면, 
// 첫번째로 등장하는 가장 긴 단어를 반환하세요. 문장은 빈 문자열이 아닙니다.)

// Example 1:
// longestWord("I love codestates"); // => "codestates"

// Example 2:
// longestWord("Teamwork skills will take you anywhere"); 
// => "Teamwork"

function longestWord(string) {
  
}


// # Week 3-3 dashInsert

// Have the function DashInsert insert dashes ('-') 
// between each two odd numbers in str. 
// (문자열이 주어졌을때, 'DashInsert' 함수는 문자열에 있는 두 홀수 사이에 
// 대시('-')를 추가하여 반환합니다.)

// For example: if str is 454793 the output should be 4547-9-3. 
// (예시: 주어진 문자열이 454793 이라면 결과값은 4547-9-3 입니다.) 
// Don't count zero as an odd number. (0 을 홀수로 간주하지 마세요.)

function DashInsert(string) {
  
}


// # Week 3-4 alphabetPosition

// In this exercise, you are required to, given a string, 
// replace every letter with its position in the alphabet. 
// (문자열이 주어졌을때, 각각의 문자를 알파벳의 몇번째 인지 
// 숫자로 바꾸는 함수를 작성하세요.) 
// If anything in the text isn't a letter, 
// ignore it and don't return it. a being 1, b being 2, etc. 
// (만약 문자가 알파벳이 아니라면, 무시하고 결과값에 포함하지 마세요. 
// a 는 1, b 는 2, 등등 으로 변환됩니다.)

// alphabetPosition("The sunset sets at twelve o' clock."); 
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(string) {
  

}

// # Week 4-1 powerOfTwo

// powerOfTwo (num) 함수는 num parameter를 가져와서 정수이며, 
// 동시에 2의 거듭제곱이면 true를 반환합니다.

// JavaScript 언어의 내장 메소드를 사용하여 구현할 수 있습니다.

// powerOfTwo(16) // true
// powerOfTwo(22) // false

function powerOfTwo(num) {
  
}


// # Week 4-2 letterCapitalize

// letterCapitalize(str)는 문자열을 parameter로 받는 함수로, 
// 문자열의 각 단어의 첫번째 글자를 대문자로 만듭니다.
// 단어는 하나의 공백으로 구분됩니다.

// letterCapitalize("hello world"); // "Hello World"
// letterCapitalize("javascript is sexy") // "Javascript Is Sexy"

function letterCapitalize(str) {
  
}



// # Week 4-3 isIsogram

// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. 
// (isogram 은 이어져 있든 이어져있지 않든 같은 문자가 
// 반복되지 않는 단어를 말합니다.) 
// Implement a function that determines whether a string that 
// contains only letters is an isogram. 
// (문자열이 주어졌을때, 해당 문자열이 isogram 인지 확인해주는 함수를 작성하세요.)

// Assume the empty string is an isogram. 
// Ignore letter case. 
// (빈 문자열은 isogram 으로 간주합니다. 대소문자는 무시하세요.)

// isIsogram("Dermatoglyphics"); // true
// isIsogram("aba"); // false
// isIsogram("moOse"); // false // -- ignore letter case

let isIsogram = function(str) {
  
}


// # Week 4-4 primeMover

// Have the function primeMover(n) return the n-th prime number. 
// The range will be from 1 to 5 * 10^4; 
// (숫자(n)가 주어졌을때, 'primeMover(n)' 함수는 num 번째 소수를 반환합니다. 
// 범위는 1에서 50,000 입니다.)

// For example: if n is 16 the output should be 53 as 53 is 
// the 16th prime number. 
// (예시: 만약 n 이 16이라면, 결과값은 16번째 소수인 53 입니다.)

let isPrime = function(n) {
  
}

let primeMover = function(num) {
  
}

// # Week 5-1 multiplicativePersistence

// 양의 정수가 주어졌을때, multiplicativePersistence(num) 함수는 주어진 수의 
// 각 자리의 숫자를 곱했을때 한 자릿수가 될때까지의 계산 횟수를 반환합니다.

// 예시: 만약 입력값이 39라면, 여러분의 함수는 3을 반환해야 합니다.
// 왜냐하면 `3 * 9 = 27` , `2 * 7 = 14` , `1 * 4 = 4` 이므로 
// 한 자리가 될 때까지 총 3번의 계산을 하기 때문입니다.

function multiplicativePersistence(num) {
  
}



// # Week 5-2 superIncreasing

// 숫자로 이루어진 배열이 주어졌을때, superIncreasing(arr) 
// 함수는 해당 배열이 superIncreasing 조건을 만족하는지 반환합니다. 
// 배열의 모든 요소들이 해당 요소들 앞에 있는 요소들 전체의 합보다 크면 
// superIncreasing 조건을 만족하는 배열이라 할 수 있습니다.

// (예시: 만약 주어진 배열이 [1, 3, 6, 13, 54] 라면 superIncreasing 
// 조건에 만족하기 때문에 여러분의 함수는 true를 반환해야 합니다. 
// 만약 superIncreasing 조건에 만족하지 않는다면 여러분의 함수는 false를 
// 반환해야 합니다.)

function superIncreasing(arr) {
  
}



// # Week 5-3 numberSearch

// 문자열이 주어졌을때, numberSearch(str) 함수는 주어진 문자열에서 숫자를 
// 모두 찾아 더한 뒤 해당 값을 (숫자, 공백 등을 제외한) 알파벳의 길이의 길이로 
// 나눈 값을 정수로 반올림하여 반환합니다.

// 예시: 만약 문자열 `Hello6 9World 2, Nic8e D7ay!` 이 주어졌다면, 
// 결과값은 2 입니다.

// 우선 모든 숫자를 더하면 `6 + 9 + 2 + 8 + 7 = 32` 가 나오게됩니다.

// 그 후 (숫자, 공백 등을 제외한) 알파벳의 길이가 `17`이기 때문에 `32/17 = 1.882`가 
// 나오게 되며, 가까운 정수로 반올림을 하게되면 정답인 2가 나오게 됩니다.

function numberSearch(str) {
  
}



// # Week 6-1 thirdGreatest

// 문자열로 이루어진 배열이 주어졌을때, `thirdGreatest(strArr)` 함수는 
// 주어진 배열에서 세번째로 긴 단어를 반환합니다. 그 중, 동률일때는 뒤에 있는 단어를 
// 반환해줘야 합니다.

// 예를 들어, 주어진 배열이 `["hello", "world", "before", "all"]` 라면, 
// 결과값은 `world` 가 될것입니다. 왜냐하면 `before`는 6글자이고 
// `hello`와 `world` 둘다 5글자 이지만 `world`가 더 뒤에 나온 5글자 단어이기 
// 때문입니다.

// 만약 주어진 배열이 `["hello", "world", "after", "all"]` 이라면 결과값은 
// `after`가 될것입니다. 왜냐하면 앞에 세 단어가 모두 5글자이기 때문에 
// 마지막 단어를 반환하기 때문입니다. 배열은 항상 적어도 문자열 세개를 가지고 있으며, 
// 각각의 문자열은 오직 글자만을 포함하고 있습니다.

function thirdGreatest(arr) {
  
}


// Week 6-3 threeFiveMultiples

// 숫자가 주어졌을때, `threeFiveMultiples(num)` 함수는 해당 숫자보다 
// 작은 3 혹은 5의 배수들의 총합을 반환합니다.

// 예시: 만약 10이 주어졌다면, 10 보다 작은 3과 5의 배수들은 3, 5, 6, 9 가 있으며 
// 해당 숫자들을 모두 더하면 23 이 나오므로 여러분이 작성하진 함수는 23 을 반환해야 합니다.

function threeFiveMultiples(num) {
  
}

// # Week 6-4 findMaxOnMultiplesOfThirty

// 어느날, 성준이는 우연히 길거리에서 양수 N을 보았다. 
// 성준이는 30이란 수를 존경하기 때문에, 그는 길거리에서 찾은 수에 포함된 숫자들을 섞어 
// 30의 배수가 되는 가장 큰 수를 만들고 싶어한다. 
// 성준이를 도와 그가 만들고 싶어하는 수를 계산하는 프로그램을 작성하라. 
// (그 수가 존재한다면)

// 출력 : 성준이가 만들고 싶어하는 수가 존재한다면 그 수를 출력하라.
//  그 수가 존재하지 않는다면, -1을 출력하라.


findMaxOnMultiplesOfThirty(4095)  // 9540
findMaxOnMultiplesOfThirty(1023)  // 3210
findMaxOnMultiplesOfThirty(4800)  // 8400

function findMaxOnMultiplesOfThirty(num) {
  
}

// # Week 9-1 sumOnMultiplicationOfOrderedPairs

// 입력한 숫자에 대해 서로 다른 두 숫자의 모든 경우에 대해, 곱의 합을 구하세요.
// sumOnMultiplicationOfOrderedPairs(2, 3, 4) // 26
// 위 코드의 결과가 26이 나오는 이유는 다음을 참조하세요.

// 가능한 조합(Pair)은 다음과 같습니다.
// - (2, 3)
// - (2, 4)
// - (3, 4)


// 각 조합의 곱을 전부 더합니다. `6 + 8 + 12 = 26`
// Note: parameter의 갯수가 정해져 있지 않음의 유의하세요.

function sumOnMultiplicationOfPairs(...array) {
  
}

// # Week 9-2 findMissingNumber

// 성준이는 1부터 n까지 숫자를 적던 중 깜빡하고 하나의 숫자를 빼먹었다. 
// 그 빼먹은 숫자를 찾으시오.

// findMissingNumber('1 6 2 4 3') // => 5

function findMissingNumber(str) {
  
}



// # Week 9-3 GCD

// 주어진 두 숫자에 대한 최대공약수(greatest common divisor)를 구하세요
// gcd(22, 24) // 2

function gcd(num1, num2) {
  
}