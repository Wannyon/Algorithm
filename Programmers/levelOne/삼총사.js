/**
 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때,
 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다.
 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때,
 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.
 */

function solution(numbers) {
    let cnt = 0;
    let length = numbers.length;

    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if(numbers[i] + numbers[j] + numbers[k] == 0) {
                    cnt++;
                }
            }
        }
    }

    return cnt;
}

// 모든 테케를 통과하지 못했음.
function solution2(number) {
    // 주어진 배열을 모두 돌면서 합이 0 되는 경우를 확인.
    let length = number.length;
    let count = 0;

    // 우선 정렬해보자.
    number.sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
        let left = i + 1;
        let right = length - 1;

        while (left < right) {
            let sum = number[i] + number[left] + number[right];

            if (sum === 0) {
                count++;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return  count;
}

const number = [-2, 3, 0, 2, -5];
console.log(solution(number));  // 2