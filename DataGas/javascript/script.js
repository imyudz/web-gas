
var nivel = null;
var dados = [];
function loadData(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/data-gas");
    xmlhttp.setRequestHeader("Cache-Control", "no-cache");
    xmlhttp.setRequestHeader("Pragma", "no-cache");
    xmlhttp.send();
    xmlhttp.addEventListener("load", function(){ 
        var listaValores = JSON.parse(xmlhttp.responseText);
        console.log(listaValores);
        listaValores.sort(function(a, b) {
            return new Date(b.registrationDate) - new Date(a.registrationDate);
        });
        nivel = parseFloat(listaValores[0].dataGasValor);
        dados.push(nivel);
        utilizarValor(nivel, dados);
        console.log("dados: "+dados);
        var ultimoValor = 0;
        if(ultimoValor != nivel){
            ultimoValor = nivel;
        }
        
        
        
    });

}

loadData();

console.log(nivel);

//Atualizar página a cada 1 minuto
var intervalo = 20000;

function atualizarPagina(){
  location.reload();
}

setTimeout(atualizarPagina, intervalo);
//




var btnOk = document.querySelector(".ok");
var tique = document.getElementById("tique-verde");


var btnSolicitaBotj = document.getElementById("solicita");
btnSolicitaBotj.style.visibility = "hidden";

var bordaCard = document.getElementById("card");



function utilizarValor(valor, valor2){
    var texto = document.querySelector(".texto");
    console.log(texto.textContent);
    texto.textContent += nivel + "%";
    var btnOkelement = document.getElementById("okelement");
    var level = document.querySelector(".level");
    level.style.height = nivel + "%";

    if(nivel>=30){
        level.style.backgroundColor = "rgb(2, 248, 30)";
        btnOk.textContent = "OK";
        btnOkelement.style.color = "rgb(0,150,50)";
        tique.className = "bi bi-check-circle-fill text-success tique-verde";
        bordaCard.className = "card card-sm border-success";
    }
    else if((nivel>10)&&(nivel<30)){
        level.style.backgroundColor = "rgb(255, 200, 0)";
        btnOk.textContent = "Na reserva";
        btnOkelement.style.color = "rgb(255,200,0)";
        tique.className = "bi bi-exclamation-triangle text-warning";
        bordaCard.className = "card card-sm border-warning";
    }
    else if((nivel<=10)&&(nivel>=0)){
        level.style.backgroundColor = "rgb(255, 30, 0)";
        btnOk.textContent = "Vazio";
        btnOkelement.style.color = "rgb(255, 30, 50)";
        tique.className = "bi bi-exclamation-triangle text-danger";
        btnSolicitaBotj.style.visibility = "visible";
        bordaCard.className = "card card-sm border-danger";
    }
    



var modoEscuro = true;

function alternarModo(){
    var body = document.getElementById("body");
    var selfbtn = document.getElementById("tema");

    if(modoEscuro){
        body.className = "bg-light text-dark";
        modoEscuro = false;
        selfbtn.className = "btn btn-dark";
        selfbtn.textContent = "Dark Mode";
    }
    else{
        body.className = "bg-dark text-light";
        selfbtn.className = "btn btn-light";
        selfbtn.textContent = "Light Mode";
        modoEscuro = true;

    }
}


var right = 105;
var mediab1 = document.querySelector(".mediab1");
var calculoMedia;
var valores = [1, 1.2, 0.7, 0.5, 1.2, 1.5, 0.7, 0.3, 1.8, 2.2, 2, 1.8, 1.9, 0.9, 1, 1.1, 0.8, 1.2, 0.3, 0.4, 0.4, 0.3, 0.2, 0.2, 0.7, 0.9, 1.2, 1.4, 1.2, 1];
var soma = 0;
for(var i = 0;i<valores.length; i++){
    soma+=valores[i];
}
console.log(soma);
var quantidade = valores.length;
var mediaValores = 0;
mediaValores = soma/quantidade;
console.log(mediaValores);

mediab1.textContent = mediaValores.toFixed(2) + " Kg ao dia";

//var pressao = [6, 5.8, 5.5, 4.5, 4, 3.5, 3, 2.5, 1.5, 0];
var chartDom = document.getElementById('grafico-bom');
var myChart = echarts.init(chartDom, 'dark');
var option;


const colorsDark = ['rgba(255, 160, 30, 1)', 'rgba(0, 100, 255, 1)', 'rgba(46,209,0,1)'];
const colorsLight = [];

option = {
    title: {
        text: "Gráfico de consumo - Janeiro",
        left: 'center',
    },
  backgroundColor: '',
  color: colorsDark,
  toolbox: {
    top: 20,
    right: right,
    itemSize: 20,
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar', 'stack'] },
      saveAsImage: {}
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    }
  },
  legend: {
    top: 40,
    textStyle: {color: 'white'},
  },
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
        color: 'rgb(0, 0, 0)'
        }
      },
      //data: ['01/1', '02/1', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01', '09/01', '10/01', '11/01', '12/01', '13/01', '14/01', '15/01', '16/01', '17/01', '18/01', '19/01', '20/01', '21/01', '22/01', '23/01', '24/01', '25/01', '26/01', '27/01', '28/01', '29/01', '30/01']
    },
  ],
  
  yAxis:
    {
      
      type: 'value',
      axisLabel: {
        formatter: '{value} Kg',
      }
      
    },
    
  series: [
    {
      stack: 'Total',  
      symbolSize: 7,
      color: colorsDark[1],
      name: 'Consumo Total p/dia',
      type: 'line',
      markPoint: {
        data: [
          { type: 'max', name: 'Max', symbolSize: 40 },
        ]
      },
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(58,150,233,0.8)'
          },
          {
            offset: 1,
            color: 'rgba(0,40,255,0.3)'
          }
        ])
      },
      data: dados,
    },
    
    /*
    {
      name: 'Gás 3',
      type: 'line',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
        ]
      },
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      
      
      data: [
        2.9, 4.9, 10.1, 45.7, 0, 220, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
      
    },
    */
    
  ]
};

option && myChart.setOption(option);





}
