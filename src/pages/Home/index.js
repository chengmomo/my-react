import React from 'react';
import {Empty, Divider} from 'antd'

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        Highcharts
        <Divider>Text</Divider>
        <Empty description='暂无数据'/>
      </div>
    )
  }
}

export default Home
