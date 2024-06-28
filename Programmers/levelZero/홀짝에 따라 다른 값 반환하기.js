// 양의 정수 n이 매개변수로 주어질 때,
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는
// solution 함수를 작성해 주세요.

const solution = (n) => {
    let result = 0;

    if (n % 2 === 1) {
        const oddArr = Array.from({length: Math.ceil(n / 2)}, (_, index) => (2 * index) + 1);

        oddArr.map((e) => result += e);

        return result;
    } else {
        const evenArr = Array(Math.ceil(n / 2)).fill().map((_, index) => (2 * (index + 1)) ** 2);

        evenArr.map((e) => result += e);

        return result;
    }
};

const n = 10;

console.log(solution(n));