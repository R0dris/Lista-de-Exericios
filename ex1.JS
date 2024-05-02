//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é admin e a senha é senha123;. Exiba uma mensagem indicando se o login
//foi bem-sucedido ou não.

// == -> verifica se um valor e igual ao outro
// === -> verifica se o valor e o tipo dos itens sao iguais
let username = prompt ("Olá, digite seu nome")
let senha = prompt ("Digite sua senha")



if (username == "admin" && senha == "senha123") 
{

    console.log ("Bem Vindo Admin")

}

else 
{
    console.log ("Usuario náo indentificado ou senha incorreta")
}





