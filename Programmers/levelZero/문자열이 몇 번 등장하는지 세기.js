// 문자열 myString과 pat이 주어집니다.
// myString에서 pat이 등장하는 횟수를 return 하는
// solution 함수를 완성해 주세요.

const solution = (myString, pat) => {
    let cnt = 0;
    let str = [...myString].join("");

    for (let i = 0; i < myString.length; i++) {
        if (str.indexOf(pat) !== -1) {
            cnt ++;
            str = str.slice(str.indexOf(pat) + 1);
        }
    }

    return cnt;
};

const myString1 = "banana";
const pat1 = "ana";

const myString2 = "aaaa";
const pat2 = "aa";

console.log(solution(myString1, pat1));
console.log(solution(myString2, pat2));