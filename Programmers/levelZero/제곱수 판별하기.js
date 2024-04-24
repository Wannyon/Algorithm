/**
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
 * 정수 n이 매개변수로 주어질 때,
 * n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
 */

function solution (n) {
    let result = 2;
    // 1~ 1000까지 제곱하고 n이 나오면 반환.
    for (let i = 1; i <= 1000; i++) {
        if (i * i === n) {
            result = 1;
        }
    }

    return result;
}

const n = 144;
console.log(solution(n));