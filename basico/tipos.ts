// String
const nome: string = 'Pedro';
console.log(nome);


// Number
const idade: number = 27;
console.log(idade);


// Boolean
const possuiHobbies: boolean = true;
console.log(possuiHobbies);


// Array
const hobbies: string[] = ["cozinhar", "esportes"];
console.log(hobbies);


// Tuplas
const endereco: [string, number, string] = ["Av. Principal", 123, "Centro"];
console.log(endereco);


// Enums
enum Cor {
    Cinza,
    Verde,
    Azul
};

const minhaCor: Cor = Cor.Verde
console.log(Cor[minhaCor]);


// Any
let carro: any = "BMW";
console.log(carro);
carro = {
    marca: "BMW",
    ano: 2019
};
console.log(carro);


// Function
function multiplicar(numA: number, numB: number): number {
    return numA * numB
};

console.log(multiplicar(2, 2));

function digaOi(): void {
    console.log("oi");
};

digaOi();


// Tipo Function
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 5));


// Objetos
let usuario: {
    nome: string,
    idade: number,
    endereco: [string, number, string],
    possuiHobbies: boolean,
    hobbies: string[]
};

usuario = {
    nome,
    idade,
    endereco,
    possuiHobbies,
    hobbies
};

console.log(usuario);


// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionario: Funcionario = {
    supervisores: ["Fernanda", "Marcelo"],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
};

console.log(funcionario.baterPonto(8));


// Union Types
let nota: number | string = 10;
console.log(nota);

nota = "10";
console.log(nota);


// Never
function falha(msg: string): never {
    throw new Error(msg);
};

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido!")
        }
    }
}

produto.validarProduto();
console.log(produto.nome);


// Null
type Contato = {
    nome: string,
    tell1: string,
    tell2: string | null
};

const contato: Contato = {
    nome: "Rafael",
    tell1: "01 901234567",
    tell2: null
};

console.log(contato);
