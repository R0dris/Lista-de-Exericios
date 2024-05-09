// //  Criando a função Alert
//alert ("Hello World") /* Isso é uma chamada de função */

// // Chamando o método Log
//console.log("Olá Thiago")

// // Declaração da função - Ensinando o computador
// function bemVindo (nome)
// {   
//     console.log ("Bem vindo " + nome)
// }
// // Chamada da função 
// bemVindo ("Thiago")

// function somar (num1, num2)
// {
//     return num1 + num2
//     console.log (num1 + num2)
// }
// let resultado = somar (6, 5)


function mostrarSituacaoAluno (nota1, nota2, nota3)
{
    let somaNota = nota1 + nota2 + nota3
    let media = somaNota / 3
    console.log (media)

    if (media >= 7)
    {
        console.log ("Você passou")
    }
}



