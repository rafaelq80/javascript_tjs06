/** Biblioteca de leitura de dados - Via teclado */
const leia = require('readline-sync')

/** Definição de variáveis */
let n1, n2;

/** Comandos de Entrada de dados - Via teclado */
n1 = leia.questionFloat("\nDigite o primeiro numero: ")
n2 = leia.questionFloat("\nDigite o segundo numero: ")

/** Comndnos de Saída de dados em Tela */
console.log("\nA Variável N1 possui o valor: ", n1)
console.log("\nA Variável N2 possui o valor: ", n2)

/** Operadores Matemáticos */
console.log("\nA Soma de n1 + n2 é igual a: ", n1 + n2)
console.log("\nA Subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("\nA Multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("\nA Divisão de n1 / n2 é igual a: ", n1 / n2)

/** Funções do Objeto Math (Funções Matemáticas) */
console.log("\nA Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log("\nA Raiz Quadrada de n1 é igual a: ", Math.sqrt(n1))
