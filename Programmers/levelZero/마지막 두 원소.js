// 정수 리스트 num_list가 주어질 때,
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록
// solution 함수를 완성해주세요.

const solution = (num_list) => {
    let length = num_list.length;

    if (length < 2) {
        return num_list;
    }

    if (num_list[length - 2] < num_list[length - 1]) {
        num_list.push(num_list[length - 1] - num_list[length - 2]);
        return num_list;
    } else if (num_list[length - 2] >= num_list[length - 1]) {
        num_list.push(num_list[length - 1] * 2);
        return num_list;
    }

    return num_list;
};

const num_list1 = [2, 1, 6];
const num_list2 = [5, 2, 1, 7, 5];

console.log(solution(num_list1));
console.log(solution(num_list2));