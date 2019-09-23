import React from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  Icon,
  Tooltip,
  Select,
  DatePicker,
  Slider,
  Switch,
  Rate,
  InputNumber,
  Cascader,
  BackTop,
  Affix,
  Anchor
} from 'antd';
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import './index.css';

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

@Form.create()
class FormDemo extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  validateToNextPassword = (rule, value, callback) => {
    const {form} = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };
  validateToFirstPassword = (rule, value, callback) => {
    const {form} = this.props;
    if (value && value !== form.getFieldValue('firstPassword')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  handleConfirmBlur = e => {
    const {value} = e.target;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  };


  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 16, offset: 8},
      }
    };
    const OtherItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 17, offset: 1},
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 70}}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>,
    );

    return (
      <div className='wrap'>
        <CustomBreadcrumb arr={['ant', 'form']}/>
        <BackTop visibilityHeight={100}/>
        <Row gutter={20}>
          <Col span={12}>
            <Card title='Login' id='login'>
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
                  {
                    getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)
                  }
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Card title='Other' id='other'>
              <Form {...OtherItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Select[multiple]">
                  {getFieldDecorator('select-multiple', {
                    rules: [
                      {required: true, message: 'Please select your favourite colors!', type: 'array'},
                    ],
                  })(
                    <Select mode="multiple" placeholder="Please select favourite colors">
                      <Select.Option value="red">Red</Select.Option>
                      <Select.Option value="green">Green</Select.Option>
                      <Select.Option value="blue">Blue</Select.Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item label="Radio.Group">
                  {getFieldDecorator('radio-group')(
                    <Radio.Group>
                      <Radio value="a">item 1</Radio>
                      <Radio value="b">item 2</Radio>
                      <Radio value="c">item 3</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>
                <Form.Item label="Checkbox.Group">
                  {getFieldDecorator('checkbox-group', {
                    initialValue: ['A', 'B'],
                  })(
                    <Checkbox.Group style={{width: '100%'}}>
                      <Row>
                        <Col span={6}>
                          <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col span={6}>
                          <Checkbox disabled value="B">
                            B
                          </Checkbox>
                        </Col>
                        <Col span={6}>
                          <Checkbox value="C">C</Checkbox>
                        </Col>
                        <Col span={6}>
                          <Checkbox value="D">D</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  )}
                </Form.Item>
                <Form.Item label="Rate">
                  {getFieldDecorator('rate', {
                    initialValue: 3.5,
                  })(<Rate/>)}
                </Form.Item>
                <Form.Item label="Slider">
                  {getFieldDecorator('slider')(
                    <Slider
                      marks={{
                        0: 'A',
                        20: 'B',
                        40: 'C',
                        60: 'D',
                        80: 'E',
                        100: 'F',
                      }}
                    />,
                  )}
                </Form.Item>
                <Form.Item label="Switch">
                  {getFieldDecorator('switch', {valuePropName: 'checked'})(<Switch/>)}
                </Form.Item>
                <Form.Item label="InputNumber">
                  {getFieldDecorator('input-number', {initialValue: 3})(<InputNumber min={1} max={10}/>)}
                  <span className="ant-form-text"> machines</span>
                </Form.Item>
              </Form>
            </Card>
            <Card title='DatePicker' id='picker'>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="DatePicker[showTime]">
                  {getFieldDecorator('date-picker', {
                    rules: [{type: 'object', required: true, message: 'Please select time!'}]
                  })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                  )}
                </Form.Item>
                <Form.Item label="RangePicker[showTime]">
                  {getFieldDecorator('range-time-picker', {
                    rules: [{type: 'array', required: true, message: 'Please select time!'}]
                  })(
                    <DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                  )}
                </Form.Item>
              </Form>
            </Card>
            <Card title='Register' id='register'>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item
                  label={
                    <span>
                      Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o"/>
                      </Tooltip>
                    </span>
                  }
                >
                  {getFieldDecorator('nickname', {
                    rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Habitual Residence">
                  {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [
                      {type: 'array', required: true, message: 'Please select your habitual residence!'},
                    ],
                  })(<Cascader options={residences}/>)}
                </Form.Item>
                <Form.Item label='phone'>
                  {getFieldDecorator('phone', {
                    rules: [{
                      required: true,
                      message: 'Please input your phone!',
                    }]
                  })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                </Form.Item>
                <Form.Item label="E-mail">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label='password' hasFeedback>
                  {
                    getFieldDecorator('firstPassword', {
                      rules: [{
                        required: true,
                        message: 'Please input your password!',
                      }, {
                        validator: this.validateToNextPassword,
                      },]
                    })(<Input.Password/>)
                  }
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator('confirm', {
                    rules: [
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      {
                        validator: this.validateToFirstPassword,
                      },
                    ],
                  })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  {
                    getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                      // initialValue: true,
                    })(<Checkbox>I have read the agreement</Checkbox>)
                  }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          {/*<Col span={12}>*/}
          {/*</Col>*/}
        </Row>
        {/*使用HashRouter点击Anchor页面会跳转*/}
        <Affix style={styles.affixBox}>
          <Anchor offsetTop={80} affix={true}>
            <Anchor.Link href="#login" title="login demo"/>
            <Anchor.Link href="#other" title="other demo"/>
            <Anchor.Link href="#picker" title="picker demo"/>
            <Anchor.Link href="#register" title="register demo"/>
          </Anchor>
        </Affix>
      </div>
    )
  }
}

const styles = {
  affixBox: {
    position: 'absolute',
    top: 100,
    right: 50,
    // with: 300,
  }
}

export default FormDemo

