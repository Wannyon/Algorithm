// 문자열 myString과 pat가 주어집니다.
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는
// solution 함수를 완성해 주세요.

const solution = (myString, pat) => {
    const findIndex = myString.lastIndexOf(pat);

    let answer = myString.slice(0, findIndex) + pat;

    return answer;
};

const myString1 = "AbCdEFG";
const pat1 = "dE";

const myString2 = "AAAAaaaa";
const pat2 = "a";

console.log(solution(myString1, pat1));
console.log(solution(myString2, pat2));