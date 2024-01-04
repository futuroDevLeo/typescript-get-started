// Desafio

// Criar um objeto funcionário com:
//     - Array de strings com os nomes dos supervisores
//     - Função de bater ponto que recebe a hora e retorna uma string
//         -> Ponto normal (<=8)
//         -> Fora do horário (> 8)

let funcionario: { nome: string, idade: number, aniversario: string, supervisores: string[], ponto: string };

function baterPonto(hora: number): string {
    if (hora <= 8) {
        return "Ponto normal"
    } else {
        return "Fora do horário"
    }
};

let ponto: string = baterPonto(8);

funcionario = {
    nome: "Pedro",
    idade: 27,
    aniversario: "01/02",
    supervisores: ["João", "Gabriela"],
    ponto,
};

console.log(funcionario);

ponto = baterPonto(9);

funcionario = {
    nome: "Isabela",
    idade: 29,
    aniversario: "15/04",
    supervisores: ["João", "Gabriela"],
    ponto
}

console.log(funcionario);


// Outra forma mais simples de solucionar o desafio proposto

let novoFuncionario: {
    supervisores: string[],
    baterPonto: (hora: number) => string
} = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return "Ponto normal"
        } else {
            return "Fora do horário"
        }
    }
}

console.log(novoFuncionario.supervisores);
console.log(novoFuncionario.baterPonto(8));
console.log(novoFuncionario.baterPonto(9));
