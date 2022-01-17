const vetor = [1, 2, 3, 4, 5, 6, 7, 8 ,9]
//filtrando apenas os elementos pares
const pares = vetor.filter(x => x % 2 === 0)
console.log(pares)

//Um outro exemplo é retirar elementos maior do que um valor limite:
const vetor2 = [10,4,5,6,2,7,3,8,9,1]
const vetor3 = vetor2.filter(x => x < 8)
console.log(vetor3) //retorna todo valor que for menor que 8
