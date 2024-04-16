document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open-sidebar');
});

//INVESTIMENTOS

//PEGAR VALOR DOS INPUTS:
let rendaFixaValue = document.querySelector("#rendaFixa").value
let acoesValue = document.querySelector("#Acoes").value
let btcValue = document.querySelector("#btc").value
let fundoImobiliarioValue = document.querySelector("#FundoImobiliario").value

let totalValue = rendaFixaValue + acoesValue + btcValue + fundoImobiliarioValue ;

    let rendaFixaPorcentagem = (rendaFixaValue / totalValue) * 100;
    let acoesPorcentagem = (acoesValue / totalValue) * 100;
    let btcPorcentagem = (btcValue / totalValue) * 100;
    let fundoImobiliarioPorcentagem = (fundoImobiliarioValue / totalValue) * 100;

    
