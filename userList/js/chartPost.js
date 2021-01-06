
window.setOption = function (option, graphName = 'pie', seriesName = 'all', legendName = '') {

  option = option || {}

  // 如果是饼图
  if (graphName == 'pie') {
    if (seriesName == 'pie1') {
      var all_Chart = echarts.init(document.getElementById('pie1'));
    }



    option = option.map(e => {
      e.value = e.Count
      e.name = e.Name
      return e
    })
    var optionAll = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        // orient: 'vertical',
        // x: 'left',
        bottom: '0',
        data: option.map(e => e.name)
      },
      color: ['#9999cc', '#517ee3', '#66ccff', '#33d0a8', '#b3d110', '#ffc000', '#ff6c6c', '#ba5ecf'],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          // dataView: {show: true, readOnly: false},
          magicType: {
            show: true,
            type: ['pie', 'funnel']
          },
          // restore: {show: true},
          // saveAsImage: {show: true}
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['0', '80%'],
          top: '0',
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              // position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '18',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: option
        }
      ]
    };

    all_Chart.setOption(optionAll);


    return false
  }

  //如果是条形图
  if (graphName == 'bar') {
    if (seriesName == 'chart1') {
      var barChart = echarts.init(document.getElementById('chart1'));
    }
    if (seriesName == 'chart2') {
      var barChart = echarts.init(document.getElementById('chart2'));
    }
    if (seriesName == 'chart3') {
      var barChart = echarts.init(document.getElementById('chart3'));
    }
    if (seriesName == 'chart4') {
      var barChart = echarts.init(document.getElementById('chart4'));
      // let name = []
      // let count = option.map(e => { return { value: e.Count, name: e.Name } })
      // option.map(e => name.push(e.Name))
      // /* 薪资分布 */
      // var optiond = {
      //   title: {
      //   },
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: {
      //       type: 'shadow'
      //     }
      //   },
      //   legend: {
      //     data: [legendName],
      //     bottom: 0
      //   },
      //   grid: {
      //     top: '25',
      //     left: '3%',
      //     right: '3%',
      //     bottom: '15%',
      //     containLabel: true
      //   },
      //   xAxis: {
      //     type: 'value',
      //     boundaryGap: [0, 0.01],
      //     splitLine: { show: true }
      //   },
      //   yAxis: {
      //     type: 'category',
      //     data: name,

      //     // 取消y轴自动隐藏
      //     axisLabel: {
      //       interval: 0
      //     }
      //   },
      //   series: [
      //     {
      //       // name: "8-9千/月",
      //       type: 'bar',
      //       // itemStyle: {
      //       //   color: function (params) {
      //       //     var colorList = ["#3bbdff", "#ff6666",
      //       //       "#9999cc", "#66cc33", "#66ccff", "#517ee3",
      //       //       "#ffc000", '#FFB6C1', '#FFF0F5', '#D8BFD8', '#000080',
      //       //       '#87CEFA', '#00FFFF', '#ADFF2F', '#F5DEB3', "#ffc000", "#ff6666",
      //       //       "#9999cc", "#66cc33", "#66ccff", "#517ee3",
      //       //       '#87CEFA', '#00FFFF', '#ADFF2F', '#F5DEB3', "#ffc000", "#ff6666",
      //       //       "#9999cc", "#66cc33", "#66ccff", "#517ee3","#3bbdff",
      //       //     ];
      //       //     return colorList[params.dataIndex]
      //       //   }
      //       // }, //柱状条颜色
      //       itemStyle: { normal: { color: '#3bbdff' } },
      //       barWidth: '30%',

      //       data: count
      //     },

      //   ],

      //   /*  series: count.map((e, i) => {
 
 
      //      return {
      //        name: e.name,
      //        // name: '4千以下/月',
      //        type: 'bar',
      //        itemStyle: {
      //          color: "#ffc000"
      //        },
 
      //        barWidth: '30%',
 
      //        data: [e.value]
      //      }
 
      //    }) */
      // }

      // salary.setOption(optiond);
      // return false
    }


    let name = []
    let count = option.map(e => e.Count)
    option.map(e => name.push(e.Name))

    var optionBar = {
      title: {
        // text: '典型岗位',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: [legendName],
        bottom: 0
      },
      grid: {
        top: '15',
        left: '3%',
        right: '3%',
        bottom: '5%',
        containLabel: true

      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: true }
      },
      yAxis: {
        type: 'category',
        data: name,

        // 取消y轴自动隐藏
        axisLabel: {
          interval: 0
        }
      },
      series: [
        {
          name: legendName,
          type: 'bar',
          data: count,
          itemStyle: { normal: { color: '#3bbdff' } },
          barWidth: '30%',
        }
      ]
    };



    barChart.setOption(optionBar);



    return false
  }

  window.option = option



}
