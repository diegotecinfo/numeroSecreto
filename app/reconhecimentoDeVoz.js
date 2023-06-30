const elementoChute = document.getElementById('chute')

window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

onSpeak = (e) => {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
    console.log(e)
}

recognition.addEventListener('result', onSpeak)

exibeChuteNaTela = (chute) => {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())




