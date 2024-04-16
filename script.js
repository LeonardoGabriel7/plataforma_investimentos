document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open-sidebar');
});

//INVESTIMENTOS

//PEGAR VALOR DOS INPUTS:
function gerarGrafico() {
            var rendaFixaValue = parseFloat(document.getElementById("rendaFixa").value) || 0;
            var acoesValue = parseFloat(document.getElementById("acoes").value) || 0;
            var btcValue = parseFloat(document.getElementById("btc").value) || 0;
            var fundoImobiliarioValue = parseFloat(document.getElementById("fundoImobiliario").value) || 0;
            
            var totalValue = rendaFixaValue + acoesValue + btcValue + fundoImobiliarioValue;
            
            var rendaFixaPercentage = (rendaFixaValue / totalValue) * 100;
            var acoesPercentage = (acoesValue / totalValue) * 100;
            var btcPercentage = (btcValue / totalValue) * 100;
            var fundoImobiliarioPercentage = (fundoImobiliarioValue / totalValue) * 100;
            
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Renda Fixa', 'Ações', 'Bitcoin', 'Fundo Imobiliário'],
                    datasets: [{
                        label: '% de Investimento',
                        data: [rendaFixaPercentage, acoesPercentage, btcPercentage, fundoImobiliarioPercentage],
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