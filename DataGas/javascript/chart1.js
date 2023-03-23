var ctx = document.getElementsByClassName("line-chart");

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "BOTIJÃO 1",
            data: [5,10,2,5,3,7,2,3,4,1,4,5],
            borderWidth: 6,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'transparent',
        },
        {
            label: "BOTIJÃO 2",
            data: [11,2,8,6,7,5,9,7,2,5,6,7],
            borderWidth: 6,
            borderColor: 'rgba(255,50,50, 0.85)',
            backgroundColor: 'transparent',
        }
    ]
    }
});





