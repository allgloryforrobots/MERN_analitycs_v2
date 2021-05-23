import React from "react"
import { Form, Input, Button } from 'antd'

import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }

const LoginForm = () => {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(loginThunk(values))
  }

  const onFinishFailed = (errorInfo) => {}
  
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Введите корректный email',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
              message: 'Пароль должен содержать цифры, заглавную и строчную буквы, длина 8-15 символов, только латиница',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    )
  } 

  export default LoginForm