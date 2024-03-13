/*
Exercício 01
Implemente uma função que seja capaz de filtrar usuários pelo nome em uma lista de resultados.

A função receberá a lista de usuários e o nome a ser encontrado na lista.

O retorno da função será um array com os resultados da busca ou um array vazio caso nenhum usuário seja encontrado.
*/

type Users = { nome: string, idade: number }[];

const usuarios: Users = [
    {
        nome: "Guilherme",
        idade: 23
    },
    {
        nome: "Daniel",
        idade: 40
    },
    {
        nome: "João",
        idade: 24
    },
    {
        nome: "Gustavo",
        idade: 26
    },
    {
        nome: "Ana",
        idade: 38
    },
    {
        nome: "Jorge",
        idade: 18
    },
    {
        nome: "Ananda",
        idade: 25
    }
];

const filterUsers = (user: Users, stringToFilter: string): Users => {
    const filteredUser = user.filter((usuario) => {
        return usuario.nome.toLowerCase().includes(stringToFilter.toLowerCase());
    })
    return filteredUser;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um nome: ', (stringToFilter: string): void => {
    const filteredUser = filterUsers(usuarios, stringToFilter);
    console.log(filteredUser);
    rl.close();
});