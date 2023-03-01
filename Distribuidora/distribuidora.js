/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

let fat = [{"uf": "sp", "valor": 67836.43},{"uf": "rj", "valor": 36678.66},{"uf": "mg", "valor": 29229.88},{"uf": "es", "valor": 27165.48},{"uf": "outros", "valor": 19849.53}]

let totalFaturamento = 0;
fat.forEach(element => {
    totalFaturamento += element.valor
});
fat.forEach(element => {
    let percentual = element.valor / totalFaturamento * 100;
    console.log("O estado: " + element.uf.toUpperCase() + " foi responsável por " + percentual.toFixed(2) + "% do faturamento mensal");
});
