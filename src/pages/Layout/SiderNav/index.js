import React from 'react';
import {Menu, Icon} from 'antd';
import {withRouter, Link} from 'react-router-dom'

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: 'Ant 基本组件',
    icon: 'user',
    key: '/home/ant',
    subs: [
      {title: 'Form', icon: '', key: '/home/ant/form'},
      {title: 'Table', icon: '', key: '/home/ant/table'}
    ]
  },
  {
    title: 'Nav2',
    icon: 'mail',
    key: '/home/nav2',
    subs: [
      {title: 'option3', icon: '', key: '/home/nav2/option3'},
      {
        title: '图表',
        icon: 'bar-chart',
        key: '/home/nav2/submenu',
        subs: [
          {title: 'option4', icon: '', key: '/home/nav2/submenu/option4'},
          {title: 'option5', icon: '', key: '/home/nav2/submenu/option5'},
          {title: 'option6', icon: '', key: '/home/nav2/submenu/option6'}
        ]
      }]
  }]

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter
class SiderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
      openKeys: []
    }
  }

  componentDidMount() {
    // 防止页面刷新侧边栏又初始化了
    const pathname = this.props.location.pathname
    //获取当前所在的目录层级
    const rank = pathname.split('/')
    console.log(rank)
    switch (rank.length) {
      case 2 :  //一级目录
        this.setState({
          selectedKeys: [pathname]
        })
        break;
      case 4 : //二级目录
        this.setState({
          selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
        break;
      case 5 : //三级目录，要展开两个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
        })
        break;
      default:
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    const {value: oldValue} = this.props;
    const pathname = nextProps.location.pathname
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
      })
    }
  }

  onOpenChange = (openKeys) => {
    console.log(openKeys)
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    }

    const latestOpenKey = openKeys[openKeys.length - 1]
    //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，若是子级菜单就展开父级菜单和当前子菜单
    //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
    //只适用于3级菜单
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }

  render() {
    const {openKeys, selectedKeys} = this.state
    return (
      <div>
        <div className="logo"/>
        <Menu
          onOpenChange={this.onOpenChange}
          onClick={({key}) => this.setState({selectedKeys: [key]})}
          theme="dark"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          style={{borderRight: 0}}
          mode="inline"
          inlineCollapsed={this.props.collapsed}
        >
          {
            menus && menus.map(item => {
              return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
            })
          }
        </Menu>
      </div>
    )
  }

  renderSubMenu = ({key, icon, title, subs}) => {
    return (
      <Menu.SubMenu key={key} title={<span> {icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }

  renderMenuItem = ({key, icon, title,}) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
}

export default SiderNav
