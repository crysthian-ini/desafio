function chute() {
    console.log('Olá,Crysthian do futuro!');
}
chute();

function nomeDoido(nome) {
    console.log(`ola ${nome}`);
    
    
}
nomeDoido('Crysthian');


function number3(numero) {
    return numero * 2;
    
}
let numero3 = number3(8);
console.log(numero3);

function number4(a, b, c) {
    return (a + b + c) / 3;
}

let numero4 = number4(5, 10, 20);
console.log(numero4);

function number5(a, b) {
    return a > b ? a : b;
}
let numero5 = number5(20, 6);
console.log(numero5);

function number6(a) {
    return a * a; 
}

let numero6 = number6(9);
console.log(numero6);



function imcValor(altura, peso) {
    let imc= peso / (alturaEmMetros * alturaEmMetros);

}


function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


function coverter(dinheiroReais) {
    return dinheiroReais * 4.80;
}

let dinero = coverter(5);
console.log(dinero);


function areaDaSala(alturaa, larguraa) {
    let area = alturaa * larguraa;
    let perimetro = 2 * (alturaa + larguraa);

    console.log(`a area da sala é ${area} metros quadrados`);
    console.log(`o perimetro da area é ${perimetro} metros`);
}

let alturaa = 4;
let larguraa = 4;
areaDaSala(alturaa, larguraa);

function areaCirculo(raio) {
    let areaRedonda = (2 * 3.14 * raio) * 2;
    console.log(`a area do circulo é ${areaRedonda} metros quadrados`);
}

let raio = 3;
areaCirculo(raio);

console.log('Math.Pi');

let numeroGenerico = [];
let linguagensDeProgramação = ['javaScript', 'c', 'c++', 'kotlin', 'python'];
linguagensDeProgramação.push('java', 'ruby', 'golang');

let listaNomes = ['Crysthian', 'kauan', 'lucas'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);
