document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open-sidebar');
});

//INVESTIMENTOS

//PEGAR VALOR DOS INPUTS:
document.querySelector(".btnGrafico").addEventListener("click", function() {
    let rendaFixaValue = parseFloat(document.querySelector("#rendaFixa").value);
    let acoesValue = parseFloat(document.querySelector("#Acoes").value);
    let btcValue = parseFloat(document.querySelector("#btc").value);
    let fundoImobiliarioValue = parseFloat(document.querySelector("#FundoImobiliario").value);

    let totalValue = rendaFixaValue + acoesValue + btcValue + fundoImobiliarioValue;

    let rendaFixaPorcentagem = (rendaFixaValue / totalValue) * 100;
    let acoesPorcentagem = (acoesValue / totalValue) * 100;
    let btcPorcentagem = (btcValue / totalValue) * 100;
    let fundoImobiliarioPorcentagem = (fundoImobiliarioValue / totalValue) * 100;

    // Verifica se myChart já foi inicializado e se é uma instância de Chart.js
    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    let ctx = document.getElementById('myChart').getContext('2d');
    window.myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Renda Fixa', 'Ações', 'Bitcoin', 'Fundo Imobiliário'],
            datasets: [{
                label: '% de Investimento',
                data: [rendaFixaPorcentagem, acoesPorcentagem, btcPorcentagem, fundoImobiliarioPorcentagem],
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
});