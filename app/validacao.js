verificaChute =  (chute) => {
    const numero = +chute

    numeroForaDoRange = (numero) => {
        return numero > maiorValor || numero < menorValor
    }

    fimDeJogo = (numero) => {
        return numero === 'game over'
    }

    if (fimDeJogo(chute)) {
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

        console.log('O Jogo Terminou')
        return

    } else if (chuteInvalido(numero)) {
        console.log("Valor inválido")
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        console.log("Acertou carai")
        document.body.innerHTML = `
        <h2>Você Acertou !</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>       `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

 chuteInvalido = (numero) => {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})


