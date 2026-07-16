// ===============================
// CONTADOR REGRESSIVO
// ===============================

Pconst dataCasamento = new Date(2026, 9, 3, 17, 0, 0); // 03/10/2026 às 17:00

function atualizarContador() {

    const agora = new Date();

    const diferenca = dataCasamento - agora;

    if (diferenca <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);

function copiarPix(){

  function copiarPix() {
    const chave = "77981681506";

    navigator.clipboard.writeText(chave)
        .then(() => {
            alert("Chave Pix copiada com sucesso!");
        })
        .catch(() => {
            alert("Não foi possível copiar a chave Pix.");
        });
}
function copiarPix(){

    const chave = "77981681506";

    navigator.clipboard.writeText(chave);

    const botao = document.querySelector(".pix-card .botao");

    botao.innerHTML = "✅ Chave copiada!";

    setTimeout(()=>{

        botao.innerHTML="📋 Copiar chave Pix";

    },2000);

}
