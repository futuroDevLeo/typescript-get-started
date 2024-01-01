//string
const nome: string = 'Pedro';
console.log(nome);

//number
const idade: number = 27;
console.log(idade);

//boolean
const possuiHobbies: boolean = true;
console.log(possuiHobbies);

//array
const hobbies: string[] = ["cozinhar", "esportes"];
console.log(hobbies);

//tuplas
const endereco: [string, number, string] = ["Av. Principal", 123, "Centro"];
console.log(endereco);

//enums
enum Cor {
    Cinza,
    Verde,
    Azul
};

const minhaCor: Cor = Cor.Verde
console.log(Cor[minhaCor]);

//any
let carro: any = "BMW";
console.log(carro);
carro = {
    marca: "BMW",
    ano: 2019
};
console.log(carro);

//function
function multiplicar(numA: number, numB: number): number {
    return numA * numB
};

console.log(multiplicar(2, 2));

function digaOi(): void {
    console.log("oi");
};

digaOi();

//tipo function
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 5));

//objetos
let usuario: { nome: string, idade: number, endereco: [string, number, string], possuiHobbies: boolean, hobbies: string[] };

usuario = {
    nome,
    idade,
    endereco,
    possuiHobbies,
    hobbies
};

console.log(usuario);
