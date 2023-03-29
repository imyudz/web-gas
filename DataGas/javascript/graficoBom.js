// var mediab1 = document.querySelector(".mediab1");
// var calculoMedia;
// var valores = [13, 9, 5, 15, 11, 5, 8, 9, 10, 12, 10, 5];
// var chartDom = document.getElementById('grafico-bom');
// var myChart = echarts.init(chartDom, 'dark');
// var option;


// const colorsDark = ['rgba(255, 160, 30, 1)', 'rgba(0, 100, 255, 1)', 'rgba(46,209,0,1)'];
// const colorsLight = [];

// option = {
//   backgroundColor: '',
//   color: colorsDark,
//   toolbox: {
//     top: 20,
//     right: 105,
//     itemSize: 20,
//     show: true,
//     feature: {
//       dataZoom: {
//         yAxisIndex: 'none'
//       },
//       dataView: { readOnly: false },
//       magicType: { type: ['line', 'bar', 'stack'] },
//       saveAsImage: {}
//     }
//   },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'cross',
//     }
//   },
//   legend: {
//     top: 25,
//     textStyle: {color: 'white'},
//   },
//   grid: {
//     top: 70,
//     bottom: 50
//   },
//   xAxis: [
//     {
//       type: 'category',
//       boundaryGap: false,
//       axisTick: {
//         alignWithLabel: true
//       },
//       axisLine: {
//         lineStyle: {
//         color: colorsDark[1]
//         }
//       },
//       data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
//     },
//   ],
//   yAxis: [
//     {
//       type: 'value',
//       axisLabel: {
//         formatter: '{value} %'
//       }
//     }
//   ],
//   series: [
//     {
//       symbolSize: 7,
//       color: colorsDark[1],
//       name: 'Gás 1',
//       type: 'line',
//       markPoint: {
//         data: [
//           { type: 'max', name: 'Max', symbolSize: 40 },
//         ]
//       },
//       smooth: true,
//       emphasis: {
//         focus: 'series'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: 'rgba(58,77,233,0.8)'
//           },
//           {
//             offset: 1,
//             color: 'rgba(58,77,233,0.3)'
//           }
//         ])
//       },
//       data: valores,
//     },
//     /*
//     {
//       name: 'Gás 2',
//       type: 'line',
//       markPoint: {
//         data: [
//           { type: 'max', name: 'Max' },
//         ]
//       },
//       smooth: true,
//       emphasis: {
//         focus: 'series'
//       },
      
//       data: [
//         3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
//       ]
      
//     },
//     {
//       name: 'Gás 3',
//       type: 'line',
//       markPoint: {
//         data: [
//           { type: 'max', name: 'Max' },
//         ]
//       },
//       smooth: true,
//       emphasis: {
//         focus: 'series'
//       },
      
      
//       data: [
//         2.9, 4.9, 10.1, 45.7, 0, 220, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
//       ]
      
//     },
//     */
    
//   ]
// };

// option && myChart.setOption(option);
