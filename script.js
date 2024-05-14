const bolas = document.querySelectorAll(".step-ball")

const info = document.querySelector("#info")
const infoBall = document.getElementById('infoBall');

const plans = document.querySelector("#plans")
const plansBall = document.getElementById('plansBall');

const add = document.querySelector("#add")
const addBall = document.getElementById('addBall');

const summary = document.querySelector("#summary")
const summaryBall = document.getElementById('summaryBall');

const next = document.getElementById("next")
const back = document.getElementById("back")

const arcade = document.getElementById("arcade")
const advanced = document.getElementById("advanced")
const pro = document.getElementById("pro")

const botaoOption = document.getElementsByClassName("option")

const interruptor = document.getElementById("interruptor")

var numero = 1;
var indice = 1;

var estado = true

    interruptor.addEventListener('click', (e) => {
        e.preventDefault();
        if (estado){
            interruptor.classList.add('mounthYear')
            
        }
        else{
            
        }
    })

    arcade.addEventListener('click', (e) => {
        e.preventDefault();

        buttonSelect(arcade)
    })

    advanced.addEventListener('click', (e) => {
        e.preventDefault();
        buttonSelect(advanced)
    })

    pro.addEventListener('click', (e) => {
        e.preventDefault();
        buttonSelect(pro)
    })

    function buttonSelect(botao) {
        arcade.classList.remove("botaoSelecionado")
        advanced.classList.remove("botaoSelecionado")
        pro.classList.remove("botaoSelecionado")
        botao.classList.add("botaoSelecionado")
    }



next.addEventListener('click', (e) => {
    reset()
    e.preventDefault();
    numero++
    navegacao()
})

back.addEventListener('click', (e) => {
    reset()
    e.preventDefault();
    numero--
    navegacao()
})

function reset() {
    info.classList.add("hide");
    infoBall.classList.remove("able");

    plans.classList.add("hide");
    plansBall.classList.remove("able");

    add.classList.add("hide");
    addBall.classList.remove("able");

    summary.classList.add('hide');
    summaryBall.classList.remove('able');
}

function navegacao() {
    if (numero == 1) {
        info.classList.remove("hide");
        infoBall.classList.add("able")
        back.classList.add("hide");
    }
    else if (numero == 2) {
        plans.classList.remove("hide");
        back.classList.remove("hide")
        plansBall.classList.add("able")
    }
    else if (numero == 3) {
        add.classList.remove("hide");
        next.classList.remove("hide")
        addBall.classList.add("able")
    }
    else if (numero == 4) {
        summary.classList.remove("hide");
        summaryBall.classList.add("able")
        next.classList.add("hide")
    }
    else {
        next.classList.remove('hide')
    }
}


bolas.forEach((bola) => {
    bola.value = indice;
    indice++;
    bola.textContent = bola.value;
})
/*
    

    bola.addEventListener('click', function() {

        info.classList.add("hide");
        plans.classList.add("hide");
        add.classList.add("hide");
        summary.classList.add('hide');

        bolas.forEach((bola) => {bola.classList.remove('able')});
        this.classList.add('able');
        if (bola.value == 1){
            info.classList.remove("hide");
        }
        else if (bola.value == 2){
            plans.classList.remove("hide");
        }   
        else if (bola.value == 3){
            add.classList.remove("hide");
        }
        else if (bola.value == 4){
            summary.classList.remove('hide');
        }
    })
}) */

