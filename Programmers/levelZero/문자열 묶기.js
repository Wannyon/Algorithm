// 문자열 배열 strArr이 주어집니다.
// strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때
// 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

const solution = (strArr) => {
    const lengthCount = {};

    for (let i = 0; i < strArr.length; i++) {
        const len = strArr[i].length;

        if (lengthCount[len]) {
            lengthCount[len] ++;
        } else {
            lengthCount[len] = 1;
        }
    }

    let maxSize = 0;

    for (let key in lengthCount) {
        if (lengthCount[key] > maxSize) {
            maxSize = lengthCount[key];
        }
    }

    return maxSize;
};

const strArr = ["a","bc","d","efg","hi"];

console.log(solution(strArr));  // 2