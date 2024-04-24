/**
 * 정수 배열 numbers가 매개변수로 주어집니다.
 * numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록
 * solution 함수를 완성해주세요.
 */

function solution (numbers) {
    // 요소들 중 두개를 곱해서 최댓값 얻기(음수의 곱 고려, 0이 있을 때 고려)
    let result1, result2;
    const copyArr = [...numbers].sort((a, b) => a - b);
    let num1, num2, num3, num4;

    if (copyArr[copyArr.length - 1] > 0) {
        num1 = copyArr.pop();

        if (copyArr[copyArr.length - 1] > 0) {
            num2 = copyArr.pop();
        }
    }

    if (copyArr[copyArr.length - 1] <= 0) {
        // 음수끼리의 곱.
        num3 = copyArr.shift();
        num4 = copyArr.shift();
    }

    result1 = num1 * num2;
    result2 = num3 * num4;
    console.log(num2)
    if (result1 >= result2) {
        return result1;
    } else return result2;
}

const numbers = [1, 2, -3, 4, -5];
console.log(solution(numbers));