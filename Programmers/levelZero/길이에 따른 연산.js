/**
 정수가 담긴 리스트 num_list가 주어질 때,
 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을
 10 이하이면 모든 원소의 곱을 return하도록
 solution 함수를 완성해주세요.
 */

function solution (num_list) {
    const length = num_list.length;
    let sum = 0;
    let multiple = 1;

    if (length >= 11) {
        for (let i = 0; i < length; i++) {
            sum += num_list[i];
        }

        return sum;
    } else {
        for (let i = 0; i < length; i++) {
            multiple *= num_list[i];
        }

        return multiple;
    }
}

const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
console.log(solution(num_list));    // 51