// ===============================
// CONTADOR REGRESSIVO
// ===============================

const dataCasamento = new Date("2026-10-03T17:30:00").getTime();

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

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

atualizarContador();

setInterval(atualizarContador,1000);


// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

secoes.forEach((secao)=>{

    secao.style.opacity="0";
    secao.style.transform="translateY(50px)";
    secao.style.transition="all .8s ease";

    observador.observe(secao);

});


// ===============================
// EFEITO BOTÃO
// ===============================

const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="scale(1.05)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="scale(1)";

    });

});


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino=document.querySelector(link.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
