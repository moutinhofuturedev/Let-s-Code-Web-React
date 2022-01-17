// usando a função 'map' para transformar string em número
const vector = ['10', '20', '30']
const stringToInt = (x) => parseInt(x)

const newVector = vector.map(stringToInt)

console.log(newVector)

//calculando vector depois de transforma-lo de string para número
const vectorCalculation = newVector.map(x => x * x)
console.log(vectorCalculation)

console.log('\nFazendo exercícios')
const ages = ['31', '32', '40']
const stringToNumber = (a) => parseInt(a)

const newAges = ages.map(stringToNumber)
console.log(newAges)

const sumAges = newAges.map(x => x + x)
console.log(sumAges)



