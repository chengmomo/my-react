import React from 'react';
import {Row, Col, Breadcrumb, Empty, Icon} from 'antd'
import CountUp from 'react-countup'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numData: [
        {num: 2333, icon: 'clock-circle', text: '委案数量'},
        {num: 3123.2, icon: 'trademark', text: '回收数量'},
        {num: 2099.13, icon: 'transaction', text: '委案金额'},
        {num: 8709, icon: 'money-collect', text: '回收金额'}]
    }
  }

  render() {
    let numData = this.state.numData
    return (
      <div>
        <Breadcrumb style={styles.breadStyle}>
          <Breadcrumb.Item>本年度总览</Breadcrumb.Item>
          {/*<Breadcrumb.Item>*/}
          {/*<a href="">Application Center</a>*/}
          {/*</Breadcrumb.Item>*/}
        </Breadcrumb>
        {/*<Divider></Divider>*/}
        <Row type="flex" align="middle" justify="center">
          {
            numData && numData.map((item, key) => {
              return <Col span={6} style={styles.colStyle} key={key}>
                <Icon type={item.icon} style={styles.iconStyle}/>
                <div>
                  <CountUp start={0} end={item.num} decimals={2} decimal="," style={styles.numStyle}/>
                  <p>{item.text}</p>
                </div>
              </Col>
            })
          }
        </Row>
        <Breadcrumb style={styles.breadStyle}>
          <Breadcrumb.Item>月度回收分析</Breadcrumb.Item>
        </Breadcrumb>
        {/*<Divider></Divider>*/}
        <Empty description='暂无数据'/>
      </div>
    )
  }
}

const styles = {
  breadStyle: {
    marginBottom: 20,
    marginTop: 20,
    borderLeft: '3px solid #1DA57A',
    paddingLeft: 10,
    fontSize: 16
  },
  colStyle: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'middle',
    justifyContent: 'center',
    border: '1px solid #ddd',
    padding: '20px 0',
  },
  iconStyle: {
    fontSize: 45,
    marginRight: 24,
    marginTop: 8,
    color: '#1DA57A'
  },
  numStyle: {
    color: '#1DA57A',
    fontSize: 22,
    marginBottom: 5,
  }
}

export default Home
