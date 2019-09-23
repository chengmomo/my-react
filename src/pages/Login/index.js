import React from 'react';
import {Button, Card, Avatar, Form, Icon, Input} from "antd";
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';
import './style.css'

@withRouter @Form.create() @inject('appStore')
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: 'admin',
        password: 'admin'
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.appStore.toggleLogin(true, {username: 'zcj'})
        this.props.history.push({pathname: '/home'})
      }
    });
  };

  validateToUserName = (rule, value, callback) => {
    if (value && value !== this.state.user.userName) {
      callback('账号错误');
    } else {
      callback()
    }
  };

  validateToPassword = (rule, value, callback) => {
    if (value && value !== this.state.user.password) {
      callback('密码错误');
    } else {
      callback()
    }
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="login-wrapper">
        <Card className="login-card">
          <Avatar className="login-avatar" size={60} icon="user"/>
          <h3>Hello</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  rules: [{
                    required: true,
                    message: 'Please input your userName!',
                  }, {
                    validator: this.validateToUserName,
                  }]
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                         placeholder="Username"/>
                )}
            </Form.Item>
            <Form.Item hasFeedback>
              {
                getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: 'Please input your password!',
                  }, {
                    validator: this.validateToPassword,
                  }]
                })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          type="password"
                          placeholder="Password"/>
                )}
            </Form.Item>
            <Form.Item style={{textAlign: 'right'}}>
              <a className="login-form-forgot" href="#">
                忘记密码
              </a>
              <Button type="link" size='small'>
                立即注册
              </Button>
            </Form.Item>
            <Form.Item>
              <div className="login-tip">管理员账号：admin/admin</div>
              <Button type="primary" block shape="round" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
