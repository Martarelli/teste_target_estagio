/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

let str = "Martarelli";
let strReverseArray = [];
for(let i = str.length-1; i >= 0; i--){
    strReverseArray.push(str[i])
}
let strResult = strReverseArray.slice(" ").join("");
console.log(str);
console.log(strResult);