// Arrow Funciton
function somar(n1: number, n2: number): number {
    return n1 + n2
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 1));

const saudacao = () => console.log("Olá");

const saudarPessoa = (pessoa: string) => console.log("Olá " + pessoa);
saudarPessoa("João");


// Parametro Padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio);
    while (inicio > fim) {
        inicio--
        console.log(inicio);
    };
    console.log("Fim");
};
contagemRegressiva();


// Spread & Rest
const number = [1, 10, 99, -5, 200, 101];
console.log(Math.max(...number));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
    return args
}

console.log(retornarArray(1, 2, 3, 4, 5));


// Spread & Rest (tuplas)
const tuplas: [number, string, boolean] = [1, "abc", false]

function tuplaParams1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
};

tuplaParams1(...tuplas);

function tuplaParams2(...params: [number, string, boolean]) {
    // console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
};

tuplaParams2(...tuplas)


// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];

const [motor, ano] = caracteristicas
console.log(motor);
console.log(ano);

const [w, z] = [1, 2]
console.log(w);
console.log(z);


// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        i: 'importado'
    }
};

const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);

const { nome: n, preco: p, caracteristicas: { i } } = item;
console.log(n);
console.log(p);
console.log(i);
