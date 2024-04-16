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
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
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