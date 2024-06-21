// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때,
// 각 자리수의 합을 return하도록
// solution 함수를 완성해주세요.

const solution = (num_str) => {
    let answer = 0;
    let arr = [...num_str];
    let numArr = arr.map(Number);

    answer = numArr.reduce((acc, cur) => acc + cur);

    return answer;
};

const num_str = "123456789";
console.log(solution(num_str));