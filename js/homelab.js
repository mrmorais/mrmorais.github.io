var statusSpan = document.getElementById('homelab-sts');

fetch('https://bookinfo.mrmorais.com/')
    .then(() => {
        statusSpan.innerHTML = "conectado 🌹";
    }).catch(() => {
        statusSpan.innerHTML = "desconectado 🥀"
    });