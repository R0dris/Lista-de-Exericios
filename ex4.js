/*
Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
*/


let nota1 = parseFloat ( prompt("Digite a 1ª nota do aluno: "))
let nota2 = parseFloat ( prompt("Digite a 2ª nota do aluno: "))
let nota3 = parseFloat ( prompt("Digite a 3ª nota do aluno: "))
let nota4 = parseFloat ( prompt("Digite a 4ª nota do aluno: "))

let pontuacaoTotal = nota1 + nota2 + nota3 + nota4

let média = pontuacaoTotal / 4


if (média >=  7)
{
        console.log ("Aluno aprovado, média: " + média)
}

if (média < 7 && média >5)
{
    console.log ("Aluno de Recuperação, média: " + média)
}

if (média <=  5)
{
        console.log ("Aluno reprovado, média " + média)
}
