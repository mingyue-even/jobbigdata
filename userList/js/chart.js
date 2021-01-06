
window.setOption = function (option, graphName = 'pie',seriesName = 'all',legendName='') {



  option = option || {}

  // 如果是饼图
  if (graphName == 'pie') {
    if(seriesName == 'all'){
      var all_Chart = echarts.init(document.getElementById('pieAll'));
    }
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
    console.log(option)
    let name = []
    let count = option.map(e => e.Count)
    option.map(e => name.push(e.Name))
    console.log(count)
    console.log(name)
    console.log(legendName+'-----')
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

 

 

  var optionb = {
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
      data: ['计数 标题'],
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
      data: ['惠州 | 3', '南京 | 3', '成都 | 3', '长春', '广州 | 5', '北京 | 3', '深圳 | 3', '常州', '异地招聘 | 5', '广州 | 3',
        '福州', '无锡', '青岛', '异地招聘 | 3', '合肥', '东莞', '佛山', '西安', '长沙', '北京',
        '武汉', '深圳', '广州'],

      // 取消y轴自动隐藏
      axisLabel: {
        interval: 0
      }
    },
    series: [
      {
        name: '计数 标题',
        type: 'bar',
        data: [7800, 8800, 9900, 10200, 11000, 11999,
          12800, 13200, 13999, 14200, 14999, 15200, 16000, 16900, 17500, 18500,
          19530, 22541, 35896, 46931, 95410, 178950, 289630],
        itemStyle: { normal: { color: '#8787c3' } }, //柱状条颜色
        barWidth: '30%',
      }
    ]
  };

  var optionc = {
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
      data: ['计数 名称'],
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
      data: ['万达信息股份有限公司', '广州辰岚广告有限公司', '广州无添加主义化妆品有限公司', '广东母创科技有限公司', '星火网校',
        '万达信息股份有限公司', '广州辰岚广告有限公司', '广州无添加主义化妆品有限公司', '广东母创科技有限公司', '星火网校',
        '万达信息股份有限公司', '广州辰岚广告有限公司', '广州无添加主义化妆品有限公司', '广东母创科技有限公司', '星火网校',
      ],

      // 取消y轴自动隐藏
      axisLabel: {
        interval: 0
      }
    },
    series: [
      {
        name: '计数 名称',
        type: 'bar',
        data: [13999, 14200, 14999, 15200, 16000,
          16900, 17500, 18500, 19530, 22541,
          35896, 46931, 95410, 178950, 289630],
        itemStyle: { normal: { color: '#40bf00' } }, //柱状条颜色
        barWidth: '30%',
      }
    ]
  };

  var optiond = {
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
      data: ['4千以下/月', '4-5千/月', '6-8千/月', '0.8-1.2万/月', '1.5-2万/月', '3万以上/月'],
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
      data: ['4千以下/月', '4-5千/月', '6-8千/月', '0.8-1.2万/月', '1.5-2万/月', '3万以上/月'],

      // 取消y轴自动隐藏
      axisLabel: {
        interval: 0
      }
    },
    series: [
      {
        // name: '4千以下/月',
        type: 'bar',
        // data: [ 22541, 35896, 126931, 189630, 88950, 65630],
        itemStyle: {
          color: function (params) {
            var colorList = ["#ffc000", "#ff6666", "#9999cc", "#66cc33", "#66ccff", "#517ee3"];
            return colorList[params.dataIndex]
          }
        }, //柱状条颜色
        barWidth: '30%',

        data: [
          { value: 22541, name: '4千以下/月' },
          { value: 35896, name: '4-5千/月' },
          { value: 126931, name: '6-8千/月' },
          { value: 189630, name: '0.8-1.2万/月' },
          { value: 88950, name: '1.5-2万/月' },
          { value: 65630, name: '3万以上/月' }
        ]
      },

    ]
  };

  var option1 = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      // orient: 'vertical',
      // x: 'left',
      bottom: '0',
      data: ['初中及以下', '高中', '中专', '中技', '大专', '本科', '硕士', '博士']
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
        data: [
          { value: 60, name: '初中及以下' },
          { value: 310, name: '高中' },
          { value: 120, name: '中专' },
          { value: 90, name: '中技' },
          { value: 45, name: '大专' },
          { value: 135, name: '本科' },
          { value: 30, name: '硕士' },
          { value: 30, name: '博士' }
        ]
      }
    ]
  };


 
}

window.onload = setOption