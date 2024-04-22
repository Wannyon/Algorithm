/**
 * 문자열 my_string이 매개변수로 주어질 때,
 * 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
 */

function solution(my_string) {
    let result = "";

    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {  // 대문자일때
            result += my_string[i].toLowerCase();
        } else {    // 소문자일때
            result += my_string[i].toUpperCase();
        }
    }

    return result;
}

const my_string = "cccCCC";
console.log("result : ", solution(my_string));