
window.setOption = function (option, graphName = 'pie',seriesName = '',legendName='') {



  option = option || {}

  // 如果是饼图
  if (graphName == 'pie') {
    if(seriesName == 'pieOccuCom'){
      var all_Chart = echarts.init(document.getElementById('pieOccuCom'));
    }
    if(seriesName == 'pieOccuGreen'){
      var all_Chart = echarts.init(document.getElementById('pieOccuGreen'));
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
        data: option.map(e=> e.name) 
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
  if(graphName == 'bar'){
    if(seriesName == 'barOccuDis'){
      var barChart = echarts.init(document.getElementById('barOccuDis'));
    }
    if(seriesName == 'barOccuNew'){
      var barChart = echarts.init(document.getElementById('barOccuNew'));
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
        top: '25',
        left: '3%',
        right: '3%',
        bottom: '10%',
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
