/* ==========================================
   SITE CASAMENTO
   Renan & Cárita
========================================== */

/*==============================
  MENU RESPONSIVO
==============================*/

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

}


/*==============================
  CONTADOR REGRESSIVO
==============================*/

const contador = document.getElementById("contador");

if (contador) {

    function atualizarContador() {

        // 03/09/2026 às 17:00 (horário local)
        const dataCasamento = new Date(2026, 8, 3, 17, 0, 0);

        const agora = new Date();

        const diferenca = dataCasamento - agora;

        if (diferenca <= 0) {

            contador.innerHTML = `
                <div class="tempo">
                    <h3>💍</h3>
                    <span>Chegou o grande dia!</span>
                </div>
            `;
            return;

        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        contador.innerHTML = `

        <div class="tempo">
            <h3>${dias}</h3>
            <span>Dias</span>
        </div>

        <div class="tempo">
            <h3>${horas}</h3>
            <span>Horas</span>
        </div>

        <div class="tempo">
            <h3>${minutos}</h3>
            <span>Minutos</span>
        </div>

        <div class="tempo">
            <h3>${segundos}</h3>
            <span>Segundos</span>
        </div>

        `;

    }

    atualizarContador();

    setInterval(atualizarContador, 1000);

}


/*==============================
  BOTÃO VOLTAR AO TOPO
==============================*/

const botaoTopo = document.getElementById("voltar-topo");

if (botaoTopo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            botaoTopo.classList.add("mostrar");

        } else {

            botaoTopo.classList.remove("mostrar");

        }

    });

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==============================
  COPIAR CHAVE PIX
==============================*/

function copiarPix(chave) {

    navigator.clipboard.writeText(chave);

    alert("Chave Pix copiada com sucesso!");

}


/*==============================
  ANIMAÇÃO AO ROLAR
==============================*/

const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("aparecer");

        }

    });

}, {

    threshold: 0.2

});

elementos.forEach((el) => {

    observer.observe(el);

});