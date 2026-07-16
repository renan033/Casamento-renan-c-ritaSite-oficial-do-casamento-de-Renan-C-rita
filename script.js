// ===============================
// CONTADOR REGRESSIVO
// ===============================

const dataCasamento = new Date("2026-10-03T17:00:00").getTime();

function atualizarContador() {
const agora = new Date().getTime();
const diferenca = dataCasamento - agora;

if (diferenca <= 0) {
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
}

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

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
