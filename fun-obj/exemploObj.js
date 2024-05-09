// Nome

let pessoa1 = {
    nome: "João",
    apelido: "Rodris"
}

let pessoa2 = {
    nome: "Celso",
    apelido: "Césio"
}

let pessoa3 = {
    nome: "Francisco",
    apelido: "Chico"
}


let produto = 
{
    nomeProduto: "Tônico Capilar",
    marca: "Manual",
    descricao: "acabe com a calvície",
    preco: 29.90
}

// Contatenação
console.log (produto.preco + " " + produto.descricao)
console.log ("Olá Thiago, acabe com a calvície, utilizando a Manual")

// Interpolação (Template String)
console.log (`Olá ${pessoa1.nome}, ${produto.descricao}, utilizando a ${produto.marca}`)

let produtoCadastrado =
{
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt ("Digite o nome do produto: ")
produtoCadastrado.valor = parseInt (prompt ("Digite o valor do produto: "))
produtoCadastrado.marca = prompt ("Digite a marca do produto: ")

console.log (produtoCadastrado)
