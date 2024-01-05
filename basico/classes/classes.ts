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