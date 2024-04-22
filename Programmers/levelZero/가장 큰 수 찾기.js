/**
 * 정수 배열 array가 매개변수로 주어질 때,
 * 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution (array) {
    // result = [가장 큰 수, 인덱스]
    const result = [];
    let largestNum = 0;
    let index = 0;

    // 가장 큰 수, 인덱스를 찾는다.
    for (let i = 0; i < array.length; i++) {
        if (largestNum < array[i]) {
            largestNum = array[i];
            index = i;
        }
    }

    // 반환할 배열에 값 할당.
    result.push(largestNum);
    result.push(index);

    return result;
}

const array = [1, 8, 3];
console.log(solution(array));