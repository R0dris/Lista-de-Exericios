/* 
Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
aplique um desconto de acordo com o valor total da compra. Siga a tabela:
Valor total da compra até R$ 100,00: sem desconto.
Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
Valor total da compra acima de R$ 200,00: desconto de 20%.
Exiba o valor final da compra com o desconto aplicado.
*/


let valor = parseFloat (prompt("Digite o valor da compra"))


if (valor <= 100)
{
    let Valord1 = valor
    alert ("Valor final da compra é de R$: " + Valord1)
}

if (valor > 100 && valor <=200)
{
    let valord2 = valor * 0.90
    alert ("Valor final da compra é de R$: " + valord2)
}

if (valor > 200 )
{
    let valord3 = valor * 0.80
    alert ("Valor final da compra é de R$: " + valord3)
}