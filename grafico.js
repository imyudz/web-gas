
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

const colors = ['#5470C6', '#EE6666'];
option = {
  title:{
    text: "Consumo de Gás",
    top: 34,
    left: '36%',
  },
  color: colors,
  toolbox: {
    top: 30,
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
  legend: {},
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
          color: colors[1]
        }
      },
      data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} KG'
      }
    }
  ],
  series: [
    {
      name: 'Precipitation(2015)',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Precipitation(2016)',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [
        3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
    },
    {
      name: 'Precipitation(2000)',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [
        2.9, 4.9, 10.1, 45.7, 0, 220, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
    },
  ]
};

option && myChart.setOption(option);




// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

// option = {

//   
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
//   },
//   yAxis: {
//     type: 'value',
//     axisLabel: {
//       formatter: '{value} °C'
//     }
//   },
//   series: [
//     {
//       name: 'Highest',
//       type: 'line',
//       data: [10, 11, 13, 11, 12, 12, 9],
//       markPoint: {
//         data: [
//           { type: 'max', name: 'Max' },
//           { type: 'min', name: 'Min' }
//         ]
//       },
//       markLine: {
//         data: [{ type: 'average', name: 'Avg' }]
//       }
//     },
//     {
//       name: 'Lowest',
//       type: 'line',
//       data: [1, -2, 2, 5, 3, 2, 0],
//       markPoint: {
//         data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
//       },
//       markLine: {
//         data: [
//           { type: 'average', name: 'Avg' },
//           [
//             {
//               symbol: 'none',
//               x: '90%',
//               yAxis: 'max'
//             },
//             {
//               symbol: 'circle',
//               label: {
//                 position: 'start',
//                 formatter: 'Max'
//               },
//               type: 'max',
//               name: '最高点'
//             }
//           ]
//         ]
//       }
//     }
//   ]
// };

// option && myChart.setOption(option);
