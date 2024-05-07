//Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
//de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


let ano = parseInt (prompt ("Digite seu ano de nascimento"))

let idade = 2024 - ano

if (idade > 18)
{
    alert ("Você é maior de idade")
    console.log ("A idade é de: " + idade +  " anos")
}
else 
{
    alert ("Você é menor de idade")
    console.log ("A idade é de: " + idade +  " anos")
}