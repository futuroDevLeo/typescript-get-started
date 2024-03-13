/*
Exercício 01
Implemente uma função que seja capaz de filtrar usuários pelo nome em uma lista de resultados.

A função receberá a lista de usuários e o nome a ser encontrado na lista.

O retorno da função será um array com os resultados da busca ou um array vazio caso nenhum usuário seja encontrado.
*/

type Usuarios = { nome: string, idade: number }[];

const usuarios: Usuarios = [
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
];
