document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open-sidebar');
});

//INVESTIMENTOS

//PEGAR VALOR DOS INPUTS:
function gerarGrafico() {
            let rendaFixaValue = parseFloat(document.getElementById("rendaFixa").value) || 0;
            let acoesValue = parseFloat(document.getElementById("acoes").value) || 0;
            let btcValue = parseFloat(document.getElementById("btc").value) || 0;
            let fundoImobiliarioValue = parseFloat(document.getElementById("fundoImobiliario").value) || 0;
            
            let totalValue = rendaFixaValue + acoesValue + btcValue + fundoImobiliarioValue;
            
            let rendaFixaPorcentage = (rendaFixaValue / totalValue) * 100;
            let acoesPorcentage = (acoesValue / totalValue) * 100;
            let btcPorcentage = (btcValue / totalValue) * 100;
            let fundoImobiliarioPorcentage = (fundoImobiliarioValue / totalValue) * 100;
            
            let ctx = document.getElementById('myChart').getContext('2d');
            let myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Renda Fixa', 'Ações', 'Bitcoin', 'Fundo Imobiliário'],
                    datasets: [{
                        label: '% de Investimento',
                        data: [rendaFixaPorcentage, acoesPorcentage, btcPorcentage, fundoImobiliarioPorcentage],
                        backgroundColor: [
                            '#00009C',
                            'rgb(255,0,0) ',
                            '	#00FF00',
                            '	#fff'
                        ],
                        borderColor: [
                            '#000',
                            '#000',
                            '#000',
                            '#000'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }


  
        // CALCULADORA DE JUROS COMPOSTOS

   document.getElementById("btnCalcular").addEventListener('click', function(){
        const  value = document.getElementById('value').value;
        const  taxa = document.getElementById('taxa').value / 100;
        const  tempo = document.getElementById('tempo').value;
    
        const total = value * (1 + taxa)**tempo;
        document.getElementById("total").innerHTML = ("R$" + total.toFixed(2)).replace('.', ",");
    })    