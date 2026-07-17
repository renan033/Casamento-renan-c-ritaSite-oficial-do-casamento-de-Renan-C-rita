// ===============================
// CONTADOR REGRESSIVO
// ===============================

const dataCasamento = new Date(2026, 9, 3, 17, 0, 0);


function atualizarContador(){

    const agora = new Date();

    const diferenca = dataCasamento - agora;


    if(diferenca <= 0){

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";

        return;

    }


    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );


    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}


atualizarContador();

setInterval(atualizarContador,1000);



// ===============================
// COPIAR PIX
// ===============================


function copiarPix(){

    const chave = "77981681506";


    navigator.clipboard.writeText(chave)
    .then(()=>{


        const botao = document.querySelector(".pix-card .botao");


        botao.innerHTML = "✅ Chave copiada!";


        setTimeout(()=>{

            botao.innerHTML = "📋 Copiar chave Pix";

        },2500);


    })

    .catch(()=>{

        alert("Não foi possível copiar a chave Pix.");

    });


}




// ===============================
// ANIMAÇÃO DAS SEÇÕES
// ===============================


const secoes = document.querySelectorAll("section");


const observador = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("mostrar");


        }


    });


},{


    threshold:0.15


});



secoes.forEach((secao)=>{


    observador.observe(secao);

.menu-toggle{
    display:none;
    background:none;
    border:none;
    color:#fff;
    font-size:30px;
    cursor:pointer;
}

@media (max-width:768px){

    .navbar{
        padding:15px 20px;
    }

    .menu-toggle{
        display:block;
    }

    .menu{
        display:none;
        position:absolute;
        top:80px;
        left:15px;
        right:15px;
        background:#12355B;
        border-radius:15px;
        flex-direction:column;
        padding:15px;
        gap:10px;
    }

    .menu.ativo{
        display:flex;
    }

    .menu a{
        width:100%;
        text-align:center;
        padding:14px;
    }

    .hero h1{
        font-size:48px;
    }

    .hero p{
        font-size:18px;
    }
}
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("active");
};

document.querySelectorAll(".menu a").forEach(link => {
    link.onclick = () => {
        menu.classList.remove("active");
    };
});
