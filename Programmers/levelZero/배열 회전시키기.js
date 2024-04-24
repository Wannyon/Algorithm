/**
 * 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을
 * return하도록 solution 함수를 완성해주세요.
 */

function solution(numbers, direction) {
    const result = [...numbers];
    // right: 오른쪽에서 빼서 왼쪽에 삽입.
    if (direction === "right") {
        result.unshift(result.pop());
    } else if (direction === "left") {
        result.push(result.shift());
    }

    return result;
}

const numbers = [1, 2, 3];
const direction = "right";
console.log(solution(numbers, direction));