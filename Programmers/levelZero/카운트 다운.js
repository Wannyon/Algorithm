// 정수 start_num와 end_num가 주어질 때,
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를
// return하도록 solution 함수를 완성해주세요.

const solution = (start_num, end_num) => {
    return result = Array.from({ length: start_num - end_num + 1 }, (e, index) => {
        return start_num - index;
    });
};

const start_num = 10;
const end_num = 3;

console.log(solution(start_num, end_num));