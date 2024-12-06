let matrizDesordenada = [
    [1, 7, 9, 11],
    [2, 6, 4, 12],
    [3, 5, 8, 10],
]

/** Converte a Matriz em um Vetor */
let vetor = matrizDesordenada.flat();

/** Ordena o Vetor */
vetor.sort((a,b) => a - b);

/** Converte o Vetor em Matriz */
let matrizOrdenada = [];
while (vetor.length) {
  matrizOrdenada.push(vetor.splice(0, 4)); // Ajustar o splice com o numero de colunas
}

/** Exibe a Matriz Ordenada */
console.table(matrizOrdenada);