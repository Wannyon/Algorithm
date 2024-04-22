/**
 * 정수 n이 매개변수로 주어질 때,
 * n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
    // 각 자리 숫자의 합을 반환.
    let result = 0;

    // 파라미터를 string으로 변환.
    let str = n.toString();

    // 문자열을 배열로 변환.
    let arr = [...str];

    // 배열의 요소들을 정수로 바꿔서 합산.
    arr.map(element => {
        result += parseInt(element);
    });

    return result;
}

const n = 1234;
console.log(solution(n));