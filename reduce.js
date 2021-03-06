const vetor = [1, 2, 3, 4, 5, 6]

const somaVetor = vetor.reduce((estado, item) => estado + item)
// console.log(somaVetor)

//operação mais complexa com reduce
const matriz = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 4, 3]
]

const somaColuna = (condicao, elemento) => {
    return [condicao[0] + elemento[0] + elemento[1],
        condicao[1] + elemento[2] + elemento[3],
        condicao[2] + elemento[2] + elemento[3]
    ]
}

const somaTotal = matriz.reduce(somaColuna, [0,0,0])
// console.log(somaTotal)

//testando o reduce com objetos
console.log('Reduce com exemplo de objetos')
const classe = [
    {nome: 'Paulo', nota1: 5, nota2: 4},
    {nome: 'Eduardo', nota1: 4, nota2: 3},
    {nome: 'Vitor', nota1: 7, nota2: 8},
    {nome: 'Júlia', nota1: 2, nota2: 7},
    {nome: 'Victoria', nota1: 9, nota2: 9},
]

const estadoInicial = {
    somaNota1: 0,
    somaNota2: 0,
    qtdNota1: 0,
    qtdNota2: 0
}

const resultado = classe.reduce((parametro, valor) => {
    return {
        somaNota1: parametro.somaNota1 + valor .nota1,
        somaNota2: parametro.somaNota2 + valor .nota2,
        qtdNota1: parametro.qtdNota1 + 1,
        qtdNota2: parametro.qtdNota2 + 1,


    }
}, estadoInicial)

console.log(resultado)



