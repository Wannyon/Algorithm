// 문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서
// 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close',function(){
    const length = input[0].length;

    for (let i = 0; i < length; i++) {
        let result = input[0][i];

        console.log(result);
    }
});