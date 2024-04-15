document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open-sidebar');
});

function active1(){
    document.querySelector("#dash1").style.backgroundColor = "blue"
}

function active2(){
    document.querySelector('#carteira').style.backgroundColor = "blue"
}

function active3(){
    document.querySelector('#gasto').style.backgroundColor = "blue"
}

function active4(){
    document.querySelector('#calculadora').style.backgroundColor = "blue"
}