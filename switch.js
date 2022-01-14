let sinal = 'azul'

switch (sinal) {
    case 'verde':
        console.log('pode passar')
        break
    case 'amarelo':
        console.log('preste atenção,vai fechar')
        break
    case 'vermelho':
        console.log('farol fechado')
        break
    default:
        console.log('Esse não é um valor válido')    
}

console.log('\nSegundo modelo de switch')

let hoje = new Date().getDay()
let dia

switch(hoje) {
    case 0:
        console.log(dia = 'Domingo')
        break
    case 1:
        console.log(dia = 'Segunda')
        break
    case 2:
        console.log(dia = 'Terça')
        break
    case 3:
        console.log(dia = 'Quarta')
        break
    case 4:
        console.log(dia = 'Quinta')
        break
    case 5:
        console.log(dia = 'Sexta')
        break
    case 6:
        console.log(dia = 'Sábado')
}