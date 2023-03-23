var chartDom = document.getElementById('grafico-bom');
var myChart = echarts.init(chartDom, 'light');
var option;

const colorsDark = ['rgba(255, 160, 30, 1)', 'rgba(50, 164, 255, 1)', 'rgba(46,209,0,1)'];
const colorsLight = [];

option = {
  color: colorsDark,
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
        color: colorsDark[1]
        }
      },
      data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      color: colorsDark[1],
      name: 'Gás 1',
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
        15, 8, 5, 10, 11, 15, 10, 9, 5, 5, 2, 5
      ]
    },
    {
      name: 'Gás 2',
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
      /*
      data: [
        3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
      */
    },
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
      /*
      data: [
        2.9, 4.9, 10.1, 45.7, 0, 220, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
      */
    },
  ]
};

option && myChart.setOption(option);
