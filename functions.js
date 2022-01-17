function geradorNumerico(comeco, fim) {
    for (let i = comeco; i <= fim; i++) {
        console.log(i)
    }
}
//chamando a função para que ela seja executada
geradorNumerico(10, 15)

//passando parâmetros
function identidade(nome) {
    console.log(nome)
}

identidade('Paulo Moutinho Vitor')

//function com return
function soma(a, b) {
    return a + b
}

let resultado = soma(16, 16)
console.log(`estou fazendo ${resultado} anos`)

//função com arrow function 
const somar = (x, y) => x + y
console.log(somar(5, 5))