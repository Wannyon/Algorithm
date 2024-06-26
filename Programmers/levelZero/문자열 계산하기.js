// my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
// 문자열 my_string이 매개변수로 주어질 때,
// 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

const solution = (my_string) => {
    let result = 0;
    let trimStr = my_string.split(" ");
    let numArr = [];
    let signArr = [];

    for (let i = 0; i < trimStr.length; i++) {
        if (i % 2 === 0) {
            let num = Number(trimStr[i])
            numArr.push(num);
        } else {
            signArr.push(trimStr[i]);
        }
    }
    console.log(numArr);
    console.log(signArr);

    let total = numArr[0];

    for (let i = 0; i < signArr.length; i++) {
        if (signArr[i] === "+") {
            total = total + numArr[i + 1];
        } else if (signArr[i] === "-") {
            total = total - numArr[i + 1];
        }
    }

    return total;
};

const my_string = "13 + 4 - 6";

console.log(solution(my_string));   // 11