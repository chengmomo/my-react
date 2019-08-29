import React from 'react';
import {Button, Checkbox, Form, Icon, Input} from "antd";
import { withRouter } from 'react-router-dom';
import {inject} from 'mobx-react';

@withRouter @Form.create() @inject('appStore')
class Login extends React.Component {
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

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {
              getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: 'Please input your userName!',
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
                }]
              })(<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"/>
              )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login
