/**
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
 * my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를
 * 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(my_string, num1, num2) {
    let result = "";

    for (let i = 0; i < my_string.length; i++) {
        const char1 = my_string.charAt(num1);
        const char2 = my_string.charAt(num2);
        const char = my_string[i];

        if (i === num1) {
            result += char2;
        } else if (i === num2) {
            result += char1;
        } else {
            result += char;
        }
    }

    return result;
}

const my_string = "hello";
const num1 = 1;
const num2 = 2;
console.log(solution(my_string, num1, num2));