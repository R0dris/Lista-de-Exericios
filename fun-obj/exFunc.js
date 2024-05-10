// Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.
// O usuário deverá digitar 0 para sair do menu.     

function nota() {

    let nota1 = parseFloat(prompt("Digite a 1ª nota do aluno: "))
    let nota2 = parseFloat(prompt("Digite a 2ª nota do aluno: "))
    let nota3 = parseFloat(prompt("Digite a 3ª nota do aluno: "))
    let nota4 = parseFloat(prompt("Digite a 4ª nota do aluno: "))

    let pontuacaoTotal = nota1 + nota2 + nota3 + nota4

    let média = pontuacaoTotal / 4


    if (média >= 7) {
        console.log("Aluno aprovado, média: " + média)
    }

    if (média < 7 && média > 5) {
        console.log("Aluno de Recuperação, média: " + média)
    }

    if (média <= 5) {
        console.log("Aluno reprovado, média " + média)
    }

}

function idade() {
    let ano = parseInt(prompt("Digite seu ano de nascimento"))

    let idade = 2024 - ano

    if (idade > 18) {
        alert("Você é maior de idade")
        console.log("A idade é de: " + idade + " anos")
    }
    else {
        alert("Você é menor de idade")
        console.log("A idade é de: " + idade + " anos")
    }
}

function numeroPar() {
    let numero = parseInt(prompt("Escolha um número"))

    if (numero % 2 == 0) {
        console.log("Número par inserido")
    }
    else {
        console.log("Número impar inserido")
    }
}

function dia() {
    let dia = parseInt(prompt("Escolha um dia da semana"))

    if (dia == 1) {
        console.log("Segunda-Feira")
    }
    else {
        console.clear
    }

    if (dia == 2) {
        console.log("Terça-Feira")
    }
    else {
        console.clear
    }

    if (dia == 3) {
        console.log("Quarta-Feira")
    }
    else {
        console.clear
    }

    if (dia == 4) {
        console.log("Quinta-Feira")
    }
    else {
        console.clear
    }

    if (dia == 5) {
        console.log("Sexta-Feira")
    }
    else {
        console.clear()
    }


    if (dia == 6) {
        console.log("Sábado")
    }
    else {
        console.clear
    }

    if (dia == 7) {
        console.log("Domingo")
    }
    else {
        console.clear
    }
}

function contagem() {
    let num = parseInt(prompt("Digite um número"))

    while (num != 0) {
        num--
        console.log(num)
    }
}

function compra() {
    let valor = parseFloat(prompt("Digite o valor da compra"))


    if (valor <= 100) {
        let Valord1 = valor
        alert("Valor final da compra é de R$: " + Valord1)
    }

    if (valor > 100 && valor <= 200) {
        let valord2 = valor * 0.90
        alert("Valor final da compra é de R$: " + valord2)
    }

    if (valor > 200) {
        let valord3 = valor * 0.80
        alert("Valor final da compra é de R$: " + valord3)
    }
}


let opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")




while (opcao > "0")
{
    switch (opcao) {
    case "1":
         nota ()
         opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "2":
        idade()
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "3":
        numeroPar()
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "4":
        dia()
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "5":
        contagem()
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "6":
        compra()
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
        break;
    case "9":
        opcao = prompt("Escolha um exercício: \n1: Cálculo de média com 4 notas \n2: Calcule sua idade com base no seu ano de nascimento \n3: Descubra se um número é par \n4: Qual o dia da semana? \n5: Contagem regressiva \n6: Calculadora de desconto em compra \n0 para fechar o menu \n Para reiniciar o sitema, digite 9")
    default: 
        
        break;
    }

}