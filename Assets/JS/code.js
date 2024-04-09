let inicio = document.querySelector("#contador").innerText
inicio = parseInt(inicio)

setInterval(() => {
    inicio--
    document.querySelector("#contador").innerText = inicio
}, 1000);