let nome = 'Rafael'
let profissao = 'Pessoa Desenvolvedora'
let salarioBruto = 3500.44
const bonus = 0.05

console.log('\nNome: ', nome)
console.log('\nProfissão: ', profissao)

console.log(
	'Salário Liquido: ',
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(salarioBruto + (bonus * salarioBruto))
);

// Concatenação de strings
console.log("O Salário Bruto do Colaborador " + nome + " é " + salarioBruto);

let salario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto))

// Interpolação de Strings
console.log(`O Salário Bruto do Colaborador ${nome} é ${salario}`);

