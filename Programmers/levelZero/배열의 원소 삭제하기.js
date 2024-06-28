// 정수 배열 arr과 delete_list가 있습니다.
// arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을
// return 하는 solution 함수를 작성해 주세요.

const solution = (arr, delete_list) => {
    let result = [];

    arr.forEach(arrEle => {
        let equalElement = 0;

        delete_list.forEach(deleteEle => {
            if (arrEle === deleteEle) {
                equalElement = 1;
            }
        });

        if (equalElement === 0) {
            result.push(arrEle);
        }
    });

    return result;
};

const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];

console.log(solution(arr, delete_list));