class Data {
    // Publico por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
};

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data // Posso omitir os "()"
casamento.ano = 2017
console.log(casamento);


// Outra forma de criar uma classe
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
};

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta // Posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto);


// Métodos
class NovoProduto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {
    }
    public resumo(): string {
        return this.desconto > 0 ? `${this.nome} custa R$${this.preco / 100},00 (${this.desconto * 100}% off)`
            : `${this.nome} custa R$${this.preco / 100},00`
    }
};

const novoProduto1 = new NovoProduto('Abajur', 1000);
const novoProduto2 = new NovoProduto('Espelho', 9900, 0.15);

console.log(novoProduto1.resumo());
console.log(novoProduto2.resumo());


// Private
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) {
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
};

const carro1 = new Carro('Ford', 'Ka', 185);

Array(40).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());


// Herança
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324);

console.log(f40.acelerar());
console.log(f40.frear());


// Getters e Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
};

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3
console.log(pessoa1.idade);


// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
};

console.log(Matematica.areaCirc(4));


// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void;

    getresultado(): number {
        return this.resultado
    }
};

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a + b);
    }
};

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a * b);
    }
};

console.log();
console.log();

let c1: Calculo = new Soma();
c1.executar(1, 2, 3, 4);
console.log(c1.getresultado());

c1 = new Multiplicar();
c1.executar(1, 2, 3, 4);
console.log(c1.getresultado());
