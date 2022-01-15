let counter = 1

while(counter <= 10) {
    console.log(String(counter))
    counter++
}

//laço de repetição com do while
// no do while,primeiro ele executa o bloco de código e depois ele verifica a condição

let contador = 10

do{
    console.log('\n',contador)
    contador++
}while(contador <= 15)

// laço de repetição com for (usando em uma lista de arrays)
const frutas = ['Banana', 'Maça', 'Melancia']

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i]

    console.log(`\nEu gosto de comer ${fruta}\n`)
}

//repetição com forEach

const tecnologias = ['html', 'css', 'javascript']

tecnologias.forEach(tec => {
    console.log(`Eu aprendi ${tec}`)
})







