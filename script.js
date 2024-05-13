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

var numero = 1;
var indice = 1;




    next.addEventListener('click', (e) => {
        
        info.classList.add("hide");
        plans.classList.add("hide");
        add.classList.add("hide");
        summary.classList.add('hide');
        
        e.preventDefault();
        
        console.log(numero)
        numero ++

        if (numero == 1){
            info.classList.remove("hide");
        }
        else if (numero == 2){
            plans.classList.remove("hide");
        }   
        else if (numero == 3){
            add.classList.remove("hide");
        }
        else if (numero == 4){
            summary.classList.remove("hide");
            next.classList.add('hide');
        }
        else{
            next.classList.remove('hide')
        }
    } )

    back.addEventListener('click', (e) => {
        
        info.classList.add("hide");
        plans.classList.add("hide");
        add.classList.add("hide");
        summary.classList.add('hide');
        
        e.preventDefault();
        
        console.log(numero)
        numero --

        if (numero == 1){
            info.classList.remove("hide");
            back.classList.add("hide")
        }
        else if (numero == 2){
            plans.classList.remove("hide");
        }   
        else if (numero == 3){
            add.classList.remove("hide");
            next.classList.remove("hide")
        }
        else if (numero == 4){
            summary.classList.remove("hide");
        }
        else{
            next.classList.remove('hide')
        }

    } )


bolas.forEach((bola) => {

    
    bola.value = indice;
    indice ++;

    bola.textContent = bola.value;


    

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
})

