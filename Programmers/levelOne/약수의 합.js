// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수,
// solution을 완성해주세요.

const solution = (n) => {
    let arr = [];
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    arr.map(e => sum += e)

    return sum;
};

const n = 12;

console.log(solution(n));