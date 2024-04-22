/**
 * 문자열 배열 strlist가 매개변수로 주어집니다.
 * strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
 **/
function solution(strlist) {
    const result = [];
    let length = 0;

    for (let i = 0; i < strlist.length; i++) {
        length = strlist[i].length;
        result.push(length);
        length = 0;
    }

    return result;
}

const strlist = ["We", "are", "the", "world!"];
console.log(solution(strlist));