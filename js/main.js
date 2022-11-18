//Qestion 1
const array = [2, 4, 7, 5, 4, 3, 8];
const resultArray = removeDuplicate(array);

console.log(resultArray);

function removeDuplicate(array) {
    return resultaArray = array.filter((element, index) => {
        return index == array.indexOf(element);
    });
}

// Qestion 2
let resultText = "";

result = leapYear(2020);
console.log(result);
result = leapYear(2021);
console.log(result);
// result = leapYear(2000);
// console.log(result);


function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return year + "はうるう年です。";
    } else {
        return year + "はうるう年ではありません。";
    }
}
