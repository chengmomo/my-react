import React from 'react';
import {Layout} from 'antd';
import './style.css';
import SiderNav from '../Layout/SiderNav';
import HeaderBar from "../Layout/HeaderBar";
// import ContentMain from "../Layout/ContentMain";

const {Header, Content, Sider, Footer} = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{height: '100vh'}}>
            <SiderNav collapsed={this.state.collapsed}/>
          </Sider>
          <Layout>
            <Header className="header" style={{background: '#fff', padding: 0}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
            </Header>
            <Content className="content">
              {/*<ContentMain/>*/}
              {/*嵌套子路由：页面展示的内容通过 this.props.children*/}
              {this.props.children}
            </Content>
            <Footer style={{textAlign: 'center'}}>
              My-React ©2019 Created by chengmomo <a target='_blank'
                                                     href='https://github.com/chengmomo/my-react.git'>github地址</a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Home
