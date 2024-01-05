// Desafio Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional
// Obs 2.: Criar dois produtos passando 2 e 3 parametros

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {
    }
};

const produto1 = new Produto('Abajur', 1000);
const produto2 = new Produto('Espelho', 9900, 0.15);

console.log(produto1);
console.log(produto2);
