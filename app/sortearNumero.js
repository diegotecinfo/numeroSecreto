const menorValor = 1
const maiorValor = 1000

gerarNumeroAleatorio = () => {
    return parseInt(Math.random() * maiorValor + 1)
}

const numeroSecreto = gerarNumeroAleatorio();

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

