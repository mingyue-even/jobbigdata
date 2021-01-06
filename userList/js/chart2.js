



window.setOption = (option) => {
  option = option || {}
  //: (option.name || '暂无')
  window.option = option
  let name = option.name
  if (name.length > 6 && name.length <= 12) {
    name = name.replace(/(.{6})(.+)/, "$1\n$2")
  }
  if (name.length > 12 && name.length <= 18) {
    name = name.replace(/(.{6})(.{6})(.+)/, "$1\n$2\n$3")
  }
  if (name.length > 18 && name.length <= 24) {
    name = name.replace(/(.{6})(.{6})(.{6})(.+)/, "$1\n$2\n$3\n$4")
  }
  if (name.length > 24 && name.length <= 30) {
    name = name.replace(/(.{6})(.{6})(.{6})(.{6})(.+)/, "$1\n$2\n$3\n$4\n$5")
  }
  if (name.length > 30 && name.length < 36) {
    name = name.replace(/(.{6})(.{6})(.{6})(.{6})(.{6})(.+)/, "$1\n$2\n$3\n$4\n$5\n$6")
  }
  if (name.length > 36 && name.length < 42) {
    name = name.replace(/(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.+)/, "$1\n$2\n$3\n$4\n$5\n$6\n$7")
  }

  var chart1 = echarts.init(document.getElementById('professionChart'), null, { renderer: 'svg' });

  var option1 = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 55,
        roam: false, //鼠标控制收缩
        label: {
          show: true,
          fontSize: 14
        },
        symbol: 'roundRect', //圆角矩形
        symbolSize: [120, 60], //矩形大小
        itemStyle: {        //矩形样式
          normal: {
            color: '#fff',
            borderColor: '#517ee3',
            borderWidth: 1
          },
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 24
        },
        data: [{
          name: `职业（${option.OccupationCount || 0}）`,
          x: 300,
          y: 300,
        }, {
          name: `赛项（${option.CompetitionCount || 0}）`,
          x: 800,
          y: 300,
        }, {
          name: `专业（${option.MajorCount || 0}）`,
          x: 550,
          y: 100,
        }, {
          name: `岗位（${option.StationCount || 0}）`,
          x: 550,
          y: 500,
          itemStyle: {        //矩形样式
            normal: {
              color: '#517ee3',
              borderColor: '#517ee3',
              borderWidth: 1
            },
          },
        }, {
          symbol: 'circle',
          // name: `${option?.name?.length > 12 ? option.name.replace(/(.{12})(.+)/, "$1\n$2") : (option.name || '暂无')} `,
          name: name,
          label: {
            color: '#fff',
            fontSize: 16
          },
          x: 550,
          y: 300,
          symbolSize: 140,
          itemStyle: {
            normal: {
              color: '#ed7d31',
              borderWidth: 0
            },
          }
        }],
        // links: [],
        links: [{
          source: `职业（${option.OccupationCount || 0}）`,
          target: `岗位（${option.StationCount || 0}）`,
          lineStyle: {
            type: 'dotted',
            width: 2
          }
        }, {
          source: `岗位（${option.StationCount || 0}）`,
          target: `赛项（${option.CompetitionCount || 0}）`,
          lineStyle: {
            type: 'dotted',
          }
        }, {
          source: `赛项（${option.CompetitionCount || 0}）`,
          target: `专业（${option.MajorCount || 0}）`,
          lineStyle: {
            type: 'dotted',
          }
        }, {
          source: `专业（${option.MajorCount || 0}）`,
          target: `职业（${option.OccupationCount || 0}）`,
          lineStyle: {
            type: 'dotted',
          }
        }, {
          // source: `${option?.name?.length > 12 ? option.name.replace(/(.{12})(.+)/, "$1\n$2") : (option.name || '暂无')} `,
          source: name,
          target: `职业（${option.OccupationCount || 0}）`,
          value: 90
        }, {
          // source: `${option?.name?.length > 12 ? option.name.replace(/(.{12})(.+)/, "$1\n$2") : (option.name || '暂无')} `,
          source: name,
          target: `岗位（${option.StationCount || 0}）`,
          value: 90
        }, {
          // source: `${option?.name?.length > 12 ? option.name.replace(/(.{12})(.+)/, "$1\n$2") : (option.name || '暂无')} `,
          source: name,
          target: `赛项（${option.CompetitionCount || 0}）`,
          value: 90
        }, {
          // source: `${option?.name?.length > 12 ? option.name.replace(/(.{12})(.+)/, "$1\n$2") : (option.name || '暂无')} `,
          source: name,
          target: `专业（${option.MajorCount || 0}）`,
          value: 90
        }],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ]
  };

  // option1.series[0].data.forEach(e => {
  //   e.itemStyle = {}
  // })
  // option1.series[0].data[option.i].itemStyle = {        //矩形样式
  //   normal: {
  //     color: '#517ee3',
  //     borderColor: '#517ee3',
  //     borderWidth: 1
  //   },
  // }


  function changeActive(pName) {
    setTimeout(() => {
      let old_option = chart1.getOption()
      let data = old_option.series[0].data
      for (var i = 0; i < data.length - 1; i++) {
        if (data[i].name == pName) {
          data[i].itemStyle = {        //矩形样式
            normal: {
              color: '#517ee3',
              borderColor: '#517ee3',
              borderWidth: 1
            },
          }
        } else {
          delete data[i].itemStyle
        }
      }

      chart1.setOption(old_option)
    }, 1)

  }




  // 使用刚指定的配置项和数据显示图表。
  chart1.setOption(option1);
  window.chart1 = chart1


  $("#professionChart svg").delegate('text', 'click', function (e) {
    var target = $(e.target)

    var target_text = target.text()
    // 如果是职业
    if (/岗位（\d+）/.test(target_text)) {
      v.table = 'job'
      v.panoCategory = 1
      v.type = ''
    }

    // 如果是职业
    if (/职业（\d+）/.test(target_text)) {
      v.table = 'ca'
      v.panoCategory = 0
      v.type = ''
    }

    // 如果是职业
    if (/专业（\d+）/.test(target_text)) {
      v.table = 'major'
      v.panoCategory = 2
      v.type = ''
    }

    // 如果是职业
    if (/赛项（\d+）/.test(target_text)) {
      v.table = 'comp'
      v.panoCategory = 3
      v.type = '世界职业技能大赛'
    }

    v.pageIndex = 1
    changeActive(target_text)
    v.getColumn(v.panoCategory)


    console.log(target.text())
  })

  // return false

  chart1.on('click', function (params) {
    var pName = params.name;

    changeActive(pName)



    if (pName == `岗位（${option.StationCount || 0}）`) {
      v.table = 'job'
      v.panoCategory = 1
      v.type = ''
      v.pageIndex = 1
      v.getColumn(v.panoCategory)
    }
    if (pName == `职业（${option.OccupationCount || 0}）`) {
      v.table = 'ca'
      v.panoCategory = 0
      v.type = ''
      v.pageIndex = 1
      v.getColumn(v.panoCategory)
    }
    if (pName == `专业（${option.MajorCount || 0}）`) {
      v.table = 'major'
      v.panoCategory = 2
      v.type = ''
      v.pageIndex = 1
      v.getColumn(v.panoCategory)
    }
    if (pName == `赛项（${option.CompetitionCount || 0}）`) {
      v.table = 'comp'
      v.panoCategory = 3
      v.code = ''
      v.pageIndex = 1
      v.type = '世界职业技能大赛'
      v.getPanoramaList(v.id, v.panoCategory, v.code, v.type, v.pageIndex, v.pageSize)
    }
  });


}
