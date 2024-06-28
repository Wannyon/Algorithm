// 정수 배열 arr과 정수 n이 매개변수로 주어집니다.
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을,
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을
// return 하는 solution 함수를 작성해 주세요.

const solution = (arr, n) => {
    const length = arr.length;
    const result = [...arr];

    if (length % 2 === 0) {
        return result.map((e, index) => index % 2 === 1 ?  e + n : e);
    } else {
        return result.map((e, index) => index % 2 === 0 ?  e + n : e);
    }
};

const arr = [49, 12, 100, 276, 33];
const n = 27;

console.log(solution(arr, n));