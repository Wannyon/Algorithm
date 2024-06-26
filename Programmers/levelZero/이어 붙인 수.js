// 정수가 담긴 리스트 num_list가 주어집니다.
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록
// solution 함수를 완성해주세요.

const solution = (num_list) => {
    const evenArr = [];
    const oddArr = [];

    num_list.forEach((x) => {
        if (x % 2 === 0) {
            evenArr.push(x);
        } else {
            oddArr.push(x);
        }
    });

    let evenNum = Number(evenArr.join(""));
    let oddNum = Number(oddArr.join(""));

    return evenNum + oddNum;
};

const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));