// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때,
// num_list안에 n이 있으면 1을 없으면 0을 return하도록
// solution 함수를 완성해주세요.

const solution = (num_list, n) => {
    return num_list.indexOf(n) !== -1 ? 1 : 0;
};

const num_list1 = [1, 2, 3, 4, 5];
const num_list2 = [15, 98, 23, 2, 15];
const n1 = 3;
const n2 = 20;

console.log(solution(num_list1, n1));
console.log(solution(num_list2, n2));