// 두 정수 a, b가 주어졌을 때,
// a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

const solution = (a, b) => {
    let sum = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        return a;
    }

    return sum;
};

const a = 3;
const b = 5;

console.log(solution(a, b));