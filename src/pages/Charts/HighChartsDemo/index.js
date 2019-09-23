import React from 'react';
import {PageHeader, Button, Descriptions, Row, Col, Statistic, Icon, Divider} from 'antd';
import Highcharts from 'highcharts'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

class HighChartsDemo extends React.Component {
  componentDidMount() {
    // 初始化图表
    const newChart = Highcharts.chart('chart_wrap', {
      chart: {
        type: 'spline',
        animation: false,
        marginRight: 10,
      },
      title: {
        // text: null,
      },
      // 是否使用国际标准时间
      time: {
        useUTC: false,
      },
      // 自定义数据列颜色，默认从第一个数据列起调用第一个颜色代码，依次往后。
      colors: ['#f08500', '#9dc239'],
      // 不显示右下角的版权信息
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          // 去掉鼠标悬浮到曲线上的默认线条加粗效果
          states: {
            hover: {
              enabled: false,
            },
          },
          // 禁用图例点击事件
          events: {
            legendItemClick(e) {
              return false
            },
          },
        },
      },
      xAxis: {
        type: 'datetime',
        // tickPixelInterval: 150,
        tickInterval: 60000,
        // labels: {
        //   step: 60,
        // },
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      // 修改图例样式
      legend: {
        enabled: true,
        itemStyle: {color: '#4a4a4a', fontSize: '12px', fontWeight: 'normal'},
        itemHoverStyle: {cursor: 'normal'},
      },
      // 不显示导出按钮
      exporting: {
        enabled: false,
      },
      // 数据列具体数据设置
      series: [{
        // 表示使用哪个y轴
        yAxis: 0,
        name: 'Full Ping Delays',
        lineWidth: 1,
        // 不显示曲线上的实心圆点
        marker: {
          enabled: false,
        },
        data: [22, 33, 24, 52],
      }, {
        yAxis: 0,
        name: 'Ping Delays',
        lineWidth: 1,
        // 不显示曲线上的实心圆点
        marker: {
          enabled: false,
        },
        data: [23, 44, 40, 34],
      }],
    });
    this.chart = newChart
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  render() {
    return (
      <div>
        <CustomBreadcrumb arr={['插件', '图表', 'highcharts']}/>
        <div id="chart_wrap" style={styles.chartStyle}/>
      </div>
    )
  }
}

const styles = {
  chartStyle: {
    minWidth: 500,
    height: 320
  }
}
export default HighChartsDemo
