import React from 'react';
import {PageHeader, Button, Descriptions, Row, Col, Statistic, Icon, Divider} from 'antd';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
class PageDemo extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          onBack={() => window.history.back()}
          title="PageHeader"
          subTitle="This is a subtitle"
          extra={[
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">Primary</Button>,
          ]}
        >
          <Descriptions title="Descriptions 1">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="Descriptions  2" size="small" column={2}>
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
          <Divider/>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="Feedback" value={1128} prefix={<Icon type="like"/>}/>
            </Col>
            <Col span={6}>
              <Statistic title="Unmerged" value={93} suffix="/ 100"/>
            </Col>
            <Col span={6}>
              <Statistic.Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS"/>
            </Col>
            <Col span={6}>
              <Statistic.Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒"/>
            </Col>
          </Row>
        </PageHeader>
      </div>
    )
  }
}

const styles = {}
export default PageDemo
