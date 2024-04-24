/**
 * 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
 * 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
 * a는 0, b는 1, c는 2, ..., j는 9입니다.
 * 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때
 * PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
 */

function solution (age) {
    // 0 -> a, 9 -> j;
    let result = "";
    let str = age.toString();

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "0":
                result += "a";
                break;
            case "1":
                result += "b";
                break;
            case "2":
                result += "c";
                break;
            case "3":
                result += "d";
                break;
            case "4":
                result += "e";
                break;
            case "5":
                result += "f";
                break;
            case "6":
                result += "g";
                break;
            case "7":
                result += "h";
                break;
            case "8":
                result += "i";
                break;
            case "9":
                result += "j";
                break;
        }
    }
    return result;
}

function solution2(age) {
        return age
            .toString()
            .split("")
            .map((element) => "abcdefghij"[element])
            .join("");
}

const age = 23;
console.log(solution(age));
console.log(solution2(age));