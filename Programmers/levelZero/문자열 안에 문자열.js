/**
 * 문자열 str1, str2가 매개변수로 주어집니다.
 * str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
 */

function solution (str1, str2) {
    let result = str1.indexOf(str2);

    if (result !== -1) {
        result = 1;
    } else {
        result = 2;
    }

    return result;
}

const str1 = "ab6CDE443fgh22iJKlmn1o";
const str2 = "6CD"
console.log(solution(str1, str2));