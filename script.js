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

const desconto = document.querySelector('.desconto')


var numero = 1;
var indice = 1;

const seletor = document.getElementById("assinatura")
const Mounthly = document.querySelector("#Mounthly")
const Yearly = document.querySelector("#Yearly")


function ano(){
    Yearly.classList.add('span-selected')
    Mounthly.classList.remove('span-selected')
    arcade.querySelector('.preco').textContent = "$90/yr"
    advanced.querySelector('.preco').textContent = "$120/yr"
    pro.querySelector('.preco').textContent = "$150/yr"

    const desconto = document.querySelectorAll('.desconto')
    desconto.forEach((element) =>{    
        element.style.visibility = "visible"
        element.style.height = "20px"
        element.style.opacity = "1"
    })

    const option = document.querySelectorAll(".option")        
    option.forEach((element) =>{    
        element.style.height = "180px"
    })
}

function mes(){
    Yearly.classList.remove('span-selected')
    Mounthly.classList.add('span-selected')

    arcade.querySelector('.preco').textContent = "$9/mo"
    advanced.querySelector('.preco').textContent = "$12/mo"
    pro.querySelector('.preco').textContent = "$15/mo"

    const desconto = document.querySelectorAll('.desconto')
    desconto.forEach((element) =>{    
        element.style.visibility = "hidden"
        element.style.height = "0px"
        element.style.opacity = "0"
    })

    const option = document.querySelectorAll(".option")
    option.forEach((element) =>{     
        element.style.height = "150px"
    })
}

seletor.addEventListener('change', () => {
        if (seletor.checked){
            ano()
        }
        else{
            mes()
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

