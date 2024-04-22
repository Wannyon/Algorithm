/**
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 *      - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
 * 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 **/

function solution(sides) {
    let result = 2;

    // 가장 긴 변.
    let longestSide = 0;

    for (let i = 0; i < sides.length; i++) {
        if (longestSide < sides[i]) {
            longestSide = sides[i];
        }
    }

    // 나머지 두 변.
    const restSides = [...sides];
    for (let i = 0; i < restSides.length; i++) {
        if (restSides[i] === longestSide) {
            restSides.splice(i, 1);
            break;
        }
    }
    let sum = restSides.reduce((acc, cur) => acc + cur, 0);

    // 삼각형의 성립 조건.
    if (longestSide < sum) {
        result = 1;
    } else {
        result = 2;
    }

    return result;
}

const sides = [3, 3, 3];
console.log(solution(sides));