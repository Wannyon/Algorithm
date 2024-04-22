/**
 * 두 배열이 얼마나 유사한지 확인해보려고 합니다.
 * 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(s1, s2) {
    // 같은 원소의 개수 return
    let result = 0;

    // 같은 원소 확인
    s1.map(element1 => {
        s2.map(element2 => {
            if (element1 === element2) {
                result += 1;
            }
        });
    });

    return result;
}

const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];
console.log(solution(s1, s2));