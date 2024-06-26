/**
 정수 리스트 num_list와 정수 n이 주어질 때,
 num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠
 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를
 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list, n) => {
    let result = [];

    for (let i = n; i < num_list.length; i++) {
        result.push(num_list[i]);
    }

    for (let i = 0; i < n; i++) {
        result.push(num_list[i]);
    }

    return result;
};

const num_list = [2, 1, 6];
const n = 1;

console.log(solution(num_list, n));