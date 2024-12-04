const leia = require('readline-sync')

let nome = leia.question('Digite o seu nome: ');
let idade = leia.questionInt('Digite a idade: ');
let valor;

if(idade <= 0){
    console.log("Idade inválida!");
    process.exit(0);
}else if (idade > 0 && idade <= 10){
    valor = 100.00;
}else if(idade > 10 && idade <= 29){
    valor = 200.00;
}else if(idade > 29 && idade <= 45){
    valor = 300.00;
}else if(idade > 45 && idade <= 59){
    valor = 500.00;
}else if(idade > 59 && idade <= 65){
    valor = 600.00;
}else{
    valor = 1000.00;
}

console.log(`O valor do Plano de Saúde do(a) ${nome} é de R$ ${valor.toFixed(2)}`);