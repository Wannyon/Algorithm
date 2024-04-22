/*
* 문자열 my_string이 매개변수로 주어질 때,
* my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록
* solution 함수를 작성해보세요.
*/
function solution(my_string) {
    let numbers = [];
    let currentNumber = "";

    // 문자열 복사.
    let copyString = my_string;

    // 문자열에서 숫자만 넣기.
    for (let i = 0; i < copyString.length; i++) {
        const char = copyString[i];

        if (char >= "0" && char <= "9") {
            currentNumber = char;
            numbers.push(parseInt(currentNumber));
            currentNumber = "";
        }
    }

    // 정렬.
    numbers.sort((a, b) => a - b);

    return numbers;
};

const exampleString = "hello123world45bye67";
console.log(solution(exampleString));