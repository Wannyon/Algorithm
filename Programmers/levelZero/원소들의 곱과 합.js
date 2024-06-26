// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록
// solution 함수를 완성해주세요.

const solution = (num_list) => {
    let sum = 0;
    let multiple = 1;

    num_list.forEach((x) => sum = sum + x);
    num_list.forEach((x) => multiple *= x);

    let square = sum * sum;

    if (multiple < square) {
        return 1;
    } else {
        return 0;
    }
};

const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));