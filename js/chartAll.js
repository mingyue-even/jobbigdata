
window.setOption = function (option,graphName='pie') {



  option = option || {}

  // 如果是饼图
  if (graphName == 'pie') {
  
    var all_Chart = echarts.init(document.getElementById('pieAll'));

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
        data: option.map(e=>e.name)
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
  window.option = option 
}

// window.onload = setOption