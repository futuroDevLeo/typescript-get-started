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


// Criar método preço com desconto
// Quais são os parametros e o retorno?
// Alterar método resumo para mostrar preço com desconto

class ModeloProduto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {

    }

    public resumo(): string {
        const precoAtual: number = this.precoComDesconto(this.preco, this.desconto);
        return this.desconto > 0 ? `${this.nome} custa R$${precoAtual.toFixed(2)} (${this.desconto * 100}% off)`
            : `${this.nome} custa R$${precoAtual.toFixed(2)}`
    }

    public precoComDesconto(preco: number, desconto: number): number {
        return preco / 100 - (preco / 100) * desconto
    }
};

const produto3 = new ModeloProduto('Caneta Bic', 100);
const produto4 = new ModeloProduto('Caixa de Papel Cartão', 4999, 0.15);

console.log(produto3.resumo());
console.log(produto4.resumo());