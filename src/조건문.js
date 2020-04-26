// SpecRunner를 활용하여서 조건을 만족시키세요.

/** 
 * # 01_isOldEnoughToDrink
 * 
 * 어떤 숫자, 이 경우에는 연령이 하나 주어졌을 때, 
 * isOldEnoughToDrink 함수는 주어진 연령의 사람이 미국에서 합법적으로 
 * 술을 마실 수 있는지의 여부를 반환해야 합니다.
 * 미국에서 술을 마실 수 있는 나이는 21세 이상입니다.
 * 
 * let output = isOldEnoughToDrink(22);
   console.log(output); // --> true
*/
function isOldEnoughToDrink(age) { 
  
}

/** 
 * 
 * # 02_checkAge
 * 
 * 이름과 나이를 파라미터로 받는 checkAge라는 함수는 두개 중 
 * 하나의 메시지를 리턴합니다.
 * 
 * 만일 21살보다 적으면, `Go home, {전달받은_이름}!` 
 * 만일 21살이거나 더 나이가 많으면, `Welcome, {전달받은_이름}!` 
 * 을 리턴하세요. 쉼표와 공백, 느낌표까지 정확히 리턴해야 합니다.
 * 
 * let output = checkAge('Adrian', 22);
 * console.log(output); // --> 'Welcome, Adri

*/
function checkAge(name, age) {
  
}

/** 
 * # 03_equalsTen
 * Write a function called "equalsTen". ("equalsTen" 함수를 작성하세요.)
 * Given a number, "equalsTen" returns whether or not the given number is 10. 
 * ("숫자가 주어졌을때, "equalsTen" 함수는 숫자가 10과 같은지 반환합니다.)
 * 
 * let output = equalsTen(9);
 * console.log(output); // --> false
 * 
*/
function equalsTen(num) {
  
}

/** 
 * # 04_isGreaterThan
 * Write a function called "isGreaterThan". ("isGreaterThan" 함수를 작성하세요.)
 * Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1. 
 * (두 숫자가 주어졌을때, "isGreaterThan" 함수는 두번째 숫자(num2)가 첫번째 숫자(num1)보다 
 * 큰지 반환해야 합니다.)
 * 
 * let output = isGreaterThan(11, 10);
 * console.log(output); // --> false
*/


function isGreaterThan(num1, num2) {
 
}


/** 
 * # 05_isEven
 * Write a function called "isEven". ("isEven" 함수를 작성하세요.)
 * Given a number, "isEven" returns whether it is even. 
 * ("숫자가 주어졌을때, "isEven" 함수는 주어진 숫자가 짝수인지 반환합니다.)
 * 
 * let output = isEven(11);
 * console.log(output); // --> false
*/

function isEven(num) {
  
}


/** 
 * # 06_isEvenAndGreaterThanTen
 * Write a function called "isEvenAndGreaterThanTen". 
 * ("isEvenAndGreaterThanTen" 함수를 작성하세요.)
 * Given a number, "isEvenAndGreaterThanTen" returns 
 * whether it is both even and greater than 10. 
 * (숫자가 주어졌을때, "isEvenAndGreaterThanTen" 함수는 주어진 
 * 숫자가 10보다 크고 짝수인지 반환해야 합니다.)
 * 
 * let output = isEvenAndGreaterThanTen(13);
 * console.log(output); // --> false
 
*/

function isEvenAndGreaterThanTen(num) {
  
}

/** 
 * # 07_convertScoreToGrade
 * Write a function called "convertScoreToGrade". 
 * ("convertScoreToGrade" 함수를 작성하세요.)
 * Given a score, "convertScoreToGrade" returns a string representing 
 * the letter grade corresponding to the given score. 
 * (점수가 주어졌을때, "convertScoreToGrade" 함수는 주어진 점수와 
 * 대응하는 등급을 문자열로 반환합니다.)
 * 
 * Notes:
 * - (100 - 90) --> 'A'
 * - (89 - 80) --> 'B'
 * - (79 - 70) --> 'C'
 * - (69 - 60) --> 'D'
 * - (59 - 0) --> 'F'
 * 
 * If the given score is greater than 100 or less than 0, 
 * it should return 'INVALID SCORE'. 
 * (만약 주어진 점수가 100을 초과하거나 0 미만이라면 
 * 'INVALID SCORE' 를 반환해야 합니다.)
 * 
 * let output = convertScoreToGrade(91);
 * console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {

}

/** 
 * # 08_convertScoreToGradeWithPlusAndMinus
 * Write a function called "convertScoreToGradeWithPlusAndMinus". 
 * ("convertScoreToGradeWithPlusAndMinus" 함수를 작성하세요.)
 * 
 * Given a score, "convertScoreToGradeWithPlusAndMinus" returns 
 * a string representing the letter grade corresponding 
 * to the given score. 
 * (점수가 주어졌을때, "convertScoreToGradeWithPlusAndMinus" 
 * 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.)
 * 
 * Notes:
 * - (100 - 90) --> 'A'
 * - (89 - 80) --> 'B'
 * - (79 - 70) --> 'C'
 * - (69 - 60) --> 'D'
 * - (59 - 0) --> 'F'
 * 
 * If the given score is greater than 100 or less than 0, 
 * it should return 'INVALID SCORE'. 
 * (만약 주어진 점수가 100을 초과하거나 0 미만이라면 
 * 'INVALID SCORE' 를 반환해야 합니다.)
 * 
 * If the score is between the 0 and 2 (inclusive) of a given range, 
 * return the letter with a '-' 
 * (만약 점수의 첫번째 자리가 0~2 사이라면 등급과 함께 '-'를 반환해야 합니다.)
 * 
 * If the score is between the 8 and 9 (inclusive) of a given range, 
 * return the letter with a '+' 
 * (만약 점수의 첫번째 자리가 8~9 사이라면 등급과 함께 '+'를 반환해야 합니다.)
 * 
 * There is no F+ and there is no F-. (F+ 와 F- 는 존재하지 않습니다.)
 * 
 * let output = convertScoreToGrade(91);
 * console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {

}

/** 
 * # 09_or
 * Given 2 boolean expressions, "or" returns true or false, 
 * corresponding to the || operator. 
 * (boolean 두개가 주어졌을때, "or" 함수는 || 연산자에 대응하는 
 * true 나 false 를 반환합니다.)
 * 
 * Notes:
 * Do not use the || operator. (|| 연산자를 사용하지 마세요.)
 * Use ! and && operators instead. (대신 ! 와 && 연산자를 사용하세요.)
 * 
 * let output = or(true, false);
 * console.log(output); // --> true;
*/

function or(expression1, expression2) {
  
}

/** 
 * # 10_isEitherEvenAndLessThan9
 * 
 * Write a function called "isEitherEvenAndLessThan9". 
 * ("isEitherEvenAndLessThan9" 함수를 작성하세요.)
 * 
 * Given two numbers, 'isEitherEvenAndLessThan9' returns 
 * whether at least one of them is even, and, both of them 
 * are less than 9. 
 * (숫자 두개가 주어졌을때, 'isEitherEvenAndLessThan9' 
 * 함수는 2가지 조건을 검사합니다. 우선 두 숫자 중 적어도 하나가 짝수인지, 
 * 그리고 두 숫자 모두 9보다 작은지를 확인합니다. 
 * 두 조건을 모두 만족 했을 때만 true를 반환합니다.)
 * 
 * let output = isEitherEvenAndLessThan9(2, 4);
 * console.log(output); // --> true
 * 
 * let output = isEitherEvenAndLessThan9(72, 2);
 * console.log(output); // --> false

*/
function isEitherEvenAndLessThan9(num1, num2) {

}
