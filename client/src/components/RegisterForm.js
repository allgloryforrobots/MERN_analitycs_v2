import React from "react"
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'


import { registerThunk } from '../redux/registerSlice'
import styles from '../styles/RegisterForm.module.scss'

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



const RegisterForm = () => {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(registerThunk(values))
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
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input className={styles.RegisterForm__input}/>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/,
              message: 'Password must contain numbers, uppercase and lowercase letters, length 8-15 characters',
            },
          ]}
        >
          <Input.Password className={styles.RegisterForm__input}/>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    )
  } 

  export default RegisterForm