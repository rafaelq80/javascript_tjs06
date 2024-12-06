let matrizDesordenada = [
    [1, 7, 9],
    [2, 6, 4],
    [3, 5, 8],
]

/** Converte a Matriz em um Vetor */
let vetor = matrizDesordenada.flat();

/** Ordena o Vetor */
vetor.sort((a,b) => a - b);

/** Converte o Vetor em Matriz */
let matrizOrdenada = [];
while (vetor.length) {
  matrizOrdenada.push(vetor.splice(0, 3));
}

/** Exibe a Matriz Ordenada */
console.table(matrizOrdenada);