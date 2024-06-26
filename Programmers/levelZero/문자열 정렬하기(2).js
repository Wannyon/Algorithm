/**
 * 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
 * my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록
 * solution 함수를 완성해보세요.
 */

function solution (my_string) {
    // 1. 주어진 문자열을 소문자로 전환.
    // 2. 오름차순으로 정렬.
    let str = my_string
        .toLowerCase()
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("");
    return str;
}

function solution2 (my_string) {
    let result = [...my_string.toLowerCase()].sort().join('');
    return result
}

const  my_string = "Bcad";
console.log(solution(my_string));
console.log(solution2(my_string));