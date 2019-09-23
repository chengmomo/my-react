import React from 'react';
import {Drawer, Icon, Menu, Avatar, Row, Col, Dropdown, Modal} from 'antd';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import '../style.css'

@withRouter @inject('appStore')
class HeaderBar extends React.Component {
  state = {visible: false};
  toggle = () => {
    this.props.onToggle()
  }

  logout = () => {
    this.props.appStore.toggleLogin(false)
    this.props.history.push("/login")
  }

  showConfirm = () => {
    let that = this
    Modal.confirm({
      title: '确定退出该应用?',
      // content: 'Some descriptions',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        that.logout()
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {collapsed, appStore} = this.props
    const menu = (
      <Menu className='menu'>
        <Menu.ItemGroup title='用户中心' className='menu-group'>
          <Menu.Item>你好</Menu.Item>
          <Menu.Item>个人信息</Menu.Item>
          <Menu.Item><span onClick={this.showConfirm}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title='设置中心' className='menu-group'>
          <Menu.Item><span onClick={this.showDrawer}>设置</span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
    const drawer = (
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
    return (
      <div>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <span>isLogin-{appStore.isLogin ? 'TRUE' : 'FALSE'}</span>
        <Row className="header-right">
          <Col span={20}>
            <Menu className="top-menu"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{lineHeight: '62px', borderBottom: 0}}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
          <Col span={4}>
            <Dropdown overlay={menu}>
              <Avatar icon="user"/>
            </Dropdown>
          </Col>
        </Row>
        {drawer}
      </div>
    )
  }
}

export default HeaderBar
