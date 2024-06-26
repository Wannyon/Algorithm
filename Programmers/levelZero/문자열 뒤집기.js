// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는
// solution 함수를 작성해 주세요.

const solution = (my_string, s, e) => {
    let answer = "";

    for (let i = 0; i < s; i++) {
        answer += my_string[i];
    }

    for (let i = e; i >= s; i--) {
        answer += my_string[i];
    }

    for (let i = e + 1; i < my_string.length; i++) {
        answer += my_string[i];
    }

    return answer;
};

const my_string = "Progra21Sremm3";
const s = 6;
const e = 12;

console.log(solution(my_string, s, e))