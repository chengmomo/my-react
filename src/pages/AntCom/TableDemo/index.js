import React from 'react';
import {Card, Table} from 'antd';
import LineWrap from '../../../components/LineWrap';
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
  other: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号西湖区湖底公园1号222222222222ssssssssssssssssssss22222222222222222ssssssssssssssssssssssssssssss',
  other: '胡彦祖胡彦祖西湖区湖底公园1号222222222222222xs22sss'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: '35%',
  render: (text, record) => {
    return <LineWrap title={text} lineClampNum={1}/>
  }
}, {
  title: '备注',
  dataIndex: 'other',
  key: 'other',
  width: '20%',
}];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.key === 'Disabled User', // Column configuration not to be checked
    name: record.key,
  }),
};

class TableDemo extends React.Component {
  render() {
    return (
      <div>
        <CustomBreadcrumb arr={['ant', 'table']}/>
        <Card title="可显示省略号" bordered={false} style={{marginBottom: 20}}>
          <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns}/>
        </Card>
      </div>
    )
  }
}

export default TableDemo
