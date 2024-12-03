const leia = require('readline-sync')

// Dados Usuário
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question('Digite o seu usuario: ')

let senhaLogin = leia.question('Digite a sua senha: ', {
    hideEchoBack: true, // Oculta o conteúdo digitado
})

console.log(senhaLogin)

// Verifica se o usuário e a senha estão corretos
if(usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja Bem Vinde! Usuário autenticado com Sucesso!"
}else{
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

// Verifica se o usuário está ativo
if(!isBlock){
    console.log("Usuário ativo!")
}else{
    console.log("Usuário está inativo! Contate o Administrador!")
    process.exit(0)
}

// Verifica se o usuário é Admin ou Gerente
if(isAdmin || isGerente){
    console.log("Acesso ao painel Administrativo Liberado!")
}else{
    console.log("Acesso ao painel Administrativo Negado!")
}