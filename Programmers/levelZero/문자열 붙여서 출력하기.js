// 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
// 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // 입력 받은 줄을 공백으로 나누어 배열에 저장
    input = line.split(' ');
    // 입력 받는 즉시 리드라인 인터페이스 종료
    rl.close();
}).on('close', function () {
    // 입력받은 두 문자열을 붙여서 출력
    console.log(input[0] + input[1]);
    process.exit();
});