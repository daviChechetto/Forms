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
        element.classList.add('mostrar')
        element.classList.remove('desmostrar')
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
        element.classList.remove('mostrar')
        element.classList.add('desmostrar')
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
        infoBall.classList.add("able");
        back.classList.add("hidden");
    }
    else if (numero == 2) {
        plans.classList.remove("hide");
        back.classList.remove("hidden");
        plansBall.classList.add("able");
    }
    else if (numero == 3) {
        add.classList.remove("hide");
        next.classList.remove("hidden");
        addBall.classList.add("able");
    }
    else if (numero == 4) {
        summary.classList.remove("hide");
        summaryBall.classList.add("able");
        next.classList.add("hidden");
    }
    else {
        next.classList.remove('hidden');
    }
}


bolas.forEach((bola) => {
    bola.value = indice;
    indice++;
    bola.textContent = bola.value;
})
