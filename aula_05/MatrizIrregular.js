const leia = require('readline-sync')

/** Linhas da Matriz */
let matrizInteiros = new Array(2);

/** Colunas da Matriz */
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

/** Percorrendo a Matriz e preenchendo com dados */
for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
        console.table(matrizInteiros)
    }   
}

/** Visualizando os dados inseridos na Matriz */
console.table(matrizInteiros);