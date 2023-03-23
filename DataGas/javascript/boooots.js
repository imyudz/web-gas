var ctx = document.getElementsByClassName("line-chart");

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Botijão 1",
            data: [1,3,6,9,5,3,5,8,9,2,5,6],
            borderWidth: 6,
            borderColor: 'rgba(0, 255, 50,0.85)',
            backgroundColor: 'transparent',
        },
        {
            label: "Botijão 2",
            data: [8,3,5,6,7,5,4,4,4,2,5,3],
            borderWidth: 6,
            borderColor: 'rgba(200,230,20, 0.85)',
            backgroundColor: 'transparent',
        },
        {
            label: "Botijão 3",
            data: [3,3,5,6,7,5,8,9,8,6,5,3],
            borderWidth: 6,
            borderColor: 'rgba(252,45,2, 0.85)',
            backgroundColor: 'transparent',

        },
        {
            label: "Botijão 4",
            data: [2,2,2,3,1,5,7,8,2,3,5,3],
            borderWidth: 6,
            borderColor: 'rgba(255,0,10, 0.85)',
            backgroundColor: 'transparent',
        }
    ]
    }
});