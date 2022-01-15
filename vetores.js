let vetor = [10, 20, 30, 40 ,60, 80]
vetor[3] = 100 //se eu não redeclarasse o valor seria 40 (posição do index 3)
console.log('\n',vetor[3])

//usando loop de repetição
let vetores = []

for (let i = 0; i < 10; i++) {
    vetores.push(i)
}

console.log('\n',vetores)

//percorrer uma lista de vetores com for 'of'
let vetorNumber = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]

for (let numero of vetorNumber) {
    console.log(String(numero))
}

console.log('\nCom indice')
//perconcorrer o indice de vetores com for 'in'
let vetorIndice = ['a', 'b', 'c', 'd', 'e']

for (let indice in vetorIndice) {
    console.log(indice)
}

//imprimindo o valor e o indice juntos
let frutas = ['Pêra', 'Goiaba', 'Uva']

for (let fruta of frutas) {
    for (let index in frutas) {
        console.log(fruta, index)
    }
}




