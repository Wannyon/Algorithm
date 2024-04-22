/**
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 **/

function solution(my_string) {
    let result = 0;
    const numbers = [];
    let currentNumber = "";

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];

        if (!isNaN(char)) {
            currentNumber = char;
            numbers.push(parseInt(currentNumber));
            currentNumber = "";
        }
    }

    // 요소들의 합.
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

const my_string = "aAb1B2cC34oOp";
console.log(solution(my_string));