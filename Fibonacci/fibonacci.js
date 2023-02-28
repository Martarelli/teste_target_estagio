/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

let numeroDesejado = parseInt(prompt()) ;
let fibonacci = [0,1];
let count = 0;

while(fibonacci[count] < numeroDesejado){
    let x = fibonacci[count] + fibonacci[count + 1];
    fibonacci.push(x);
    count++
}

let contem = false;
fibonacci.forEach(element => {
    if(element === numeroDesejado){
        contem = true
    }
});

if(contem){
    console.log("O número pertence a sequencia");
} else {
    console.log("O número não pertence a sequencia");
}