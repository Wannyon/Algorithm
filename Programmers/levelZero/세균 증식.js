/**
 * 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
 * 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때,
 * t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(n, t) {
    // 1시간마다 2배,
    let result = n;

    for (let i = 1; i <= t; i++) {
        result = 2 * result;
    }

    return result;
}

function  solution2(n, t) {
    // 비트연산자를 사용.
    // 0000000101 -> 0000101000
    return n << t;
}

function solution3(n, t) {
    // Math.pow(x, y) = x ** y;

    return Math.pow(2, t) * n;
}

const n = 2;
const t = 10;
console.log(solution(n, t));
console.log(solution2(n, t));
console.log(solution3(n, t));