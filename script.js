var bolas = document.querySelectorAll(".step-ball")

var info = document.querySelector("#info")
var infoBall = document.getElementById('infoBall');

var plans = document.querySelector("#plans")
var plansBall = document.getElementById('plansBall');

var add = document.querySelector("#add")
var addBall = document.getElementById('addBall');

var summary = document.querySelector("#summary")
var summaryBall = document.getElementById('summaryBall');




let indice = 1;

bolas.forEach((bola) => {
bola.textContent = indice;
indice ++;

    bola.addEventListener('click', function() {
        bolas.forEach((bola) => {bola.classList.remove('able')});
        this.classList.add('able');
        if (bola == infoBall){
            info.classList.remove("hide");
            plans.classList.add("hide");
            add.classList.add("hide");
            summary.classList.add('hide');
        }
        else if (bola == plansBall){
            info.classList.add("hide");
            plans.classList.remove("hide");
            add.classList.add("hide");
            summary.classList.add('hide');
        }   
        else if (bola == addBall){
            info.classList.add("hide");
            plans.classList.add("hide");
            add.classList.remove("hide");
            summary.classList.add('hide');
        }
        else if (bola == summaryBall){
            info.classList.add("hide");
            plans.classList.add("hide");
            add.classList.add("hide");
            summary.classList.remove('hide');
        }
    })
})

