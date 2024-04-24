/**
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 * 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록
 * solution 함수를 완성해주세요.
 */

function solution (n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        // 합성수 검사.
        let measure = [];

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                measure.push(j);
            }
        }
        console.log(measure)
        if (measure.length >= 3) {
            result ++;
        }
    }

    return result;
}

const n = 10;
console.log(solution(n));