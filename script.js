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
            const value = parseFloat(document.getElementById('value').value); // Valor inicial
            const taxa = parseFloat(document.getElementById('taxa').value) / 100; // Taxa de juros (em decimal)
            const tempo = parseInt(document.getElementById('tempo').value); // Número de períodos
            let aporteMensal = parseFloat(document.getElementById('aporte').value); // Aporte mensal
        
            let total = value; // Valor inicial
        
            // Verifica se o valor do aporte mensal é vazio
            if (isNaN(aporteMensal)) {
                aporteMensal = 0; // Define o aporte mensal como zero se for vazio
            }
        
            for (let i = 0; i < tempo; i++) {
                total = total * (1 + taxa) + aporteMensal; // Adiciona juros compostos e aportes mensais
            }
        
            document.getElementById("total").innerHTML = "R$" + total.toFixed(2).replace('.', ",");
        });


        //GASTO MENSAL

        function calcular() {
            // Obtendo os valores dos campos de entrada
            let custoFixo = parseFloat(document.getElementById("custoFixo").value);
            let conforto = parseFloat(document.getElementById("conforto").value);
            let metas = parseFloat(document.getElementById("metas").value);
            let prazeres = parseFloat(document.getElementById("prazeres").value);
            let conhecimento = parseFloat(document.getElementById("conhecimento").value);
        
            // Verificando se algum campo está vazio e definindo o valor como 0, se necessário
            if (isNaN(custoFixo)) custoFixo = 0;
            if (isNaN(conforto)) conforto = 0;
            if (isNaN(metas)) metas = 0;
            if (isNaN(prazeres)) prazeres = 0;
            if (isNaN(conhecimento)) conhecimento = 0;
        
            // Calculando o gasto mensal total
            let gastoMensalTotal = custoFixo + conforto + metas + prazeres + conhecimento;
        
            // Salvando o resultado no localStorage
            localStorage.setItem('gastoMensalTotal', gastoMensalTotal);
        
            // Exibindo o resultado
            document.getElementById("resultadoDoGastoMensal").innerHTML = "Seu gasto mensal é de <br> R$ " + gastoMensalTotal.toFixed(2).replace('.', ",");
        }



        
       
    