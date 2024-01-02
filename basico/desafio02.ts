// Pegar o seguinte código e passar ele de Js para Ts associando os tipos:

// let contaBancaria = {
//     saldo: 3456,
//     depositar(valor) {
//         this.saldo += valor
//     }
// }

// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

type ContaBancaria = {
    saldo: number,
    depositar(valor: number): void
};

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
};

const contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
};

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['34567890', '98765432']
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);