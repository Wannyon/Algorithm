// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을
// return 하는 solution 함수를 완성해 주세요.

const solution = (myString) => {
    // 아스키 코드 사용.
    let lCode = "l".charCodeAt();
    console.log(lCode);

    const myStringCode = myString.split("").map(e => e.charCodeAt());
    console.log(myStringCode);

    myStringCode.forEach((e, index) => {
        if (e < lCode) {
            myStringCode[index] = lCode;
        };
    });

    let result = "";
    myStringCode.map(e => {
        result += String.fromCharCode(e)
    });

    return result;
};

const myString = "abcdevwxyz";

console.log(solution(myString));