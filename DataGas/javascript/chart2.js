var ctx2 = document.getElementsByClassName("bar-chart");

var chartbar = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Quantidade de Gás"],
        datasets: [{
            label: 'Botijão 1',
            data: [100],
            backgroundColor: ['rgba(0, 255, 50)'],
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(253, 185, 19)'
        },
        {
            label: 'Botijão 2',
            data: [80],
            backgroundColor: ['rgb(200,230,20)'],
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(253, 185, 19)'
        },
        {
            label: 'Botijão 3',
            data: [20],
            backgroundColor: ['rgb(252,45,2)'],
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(253, 185, 19)'

        },
        {
            label: 'Botijão 4',
            data: [2],
            backgroundColor: ['rgb(255,0,10)'],
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(253, 185, 19)'

        }
    ]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
