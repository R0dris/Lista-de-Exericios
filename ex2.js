/*
Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana
e exibe o nome correspondente a esse dia.
Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.
*/

let dia = parseInt  (prompt ("Escolha um dia da semana"))

if (dia == 1 )
{
    console.log ("Segunda-Feira")
}
else
{
    console.clear
}


 if (dia == 2 )
{
    console.log ("Terça-Feira")
}
else
{
    console.clear
}

if (dia == 3 )
{
   console.log ("Quarta-Feira")
}
else
{
   console.clear
}

if (dia == 4 )
{
   console.log ("Quinta-Feira")
}
else
{
   console.clear
}

if (dia ==  5 )
{
   console.log ("Sexta-Feira")
}
else
{
   console.clear
}

if (dia ==  6 )
{
   console.log ("Sábado")
}
else
{
   console.clear
}


if (dia ==  7 )
{
   console.log ("Domingo")
}
else
{
   console.clear
}


// Limpa o console
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      console.clear()
    }
});
