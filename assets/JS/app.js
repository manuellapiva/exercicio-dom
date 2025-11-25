const botao = document.getElementById("botao-toggle")
const info = document.getElementById("info")

botao.addEventListener("click", () => {
    if (info.classList.contains("oculto")) {
        info.classList.replace("oculto", "visível")
        botao.textContent = "Esconder Informações"
    } else {
        info.classList.replace("visível", "oculto")
        botao.textContent = "Mostrar Informações"
    }
});