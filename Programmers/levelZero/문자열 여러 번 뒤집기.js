// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
// queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
// my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는
// solution 함수를 작성해 주세요.

const solution = (my_strings, queries) => {
    let result = my_strings;

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1] + 1;
        console.log("start: ", start, "end: ", end)

        let before = result.substring(0, start);
        let after = result.substring(end);

        let str = result.substring(start, end);
        let reverseStr = str.split("").reverse().join("");

        result = before + reverseStr + after;
    }

    return result;
};

const my_string = "rermgorpsam";
const queries = [[2, 3], [0, 7], [5, 9], [6, 10]];

console.log(solution(my_string, queries));