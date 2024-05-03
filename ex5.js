//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
//não.

let num1 = parseInt (prompt ("Digite seu primeiro número:"))
let num2 = parseInt (prompt ("Digite seu segundo número:"))
let num3 = parseInt (prompt ("Digite seu terceiro número:"))

if (num1 < num2 && num2 <num3)
{
    console.log ("Em ordem crescente")
}
else
{
    console.log ("Não está em ordem crescente")
}