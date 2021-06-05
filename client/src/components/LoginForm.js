import React, {useEffect} from "react"
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { message } from 'antd'
import { nullErrorMessage } from '../redux/authSlice'
import { useSelector } from 'react-redux'

import { loginThunk } from '../redux/authSlice'
import styles from '../styles/LoginForm.module.scss'

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
  let errMessage = useSelector((state) => state.auth.errMessage)

  const onFinish = (values) => {
    dispatch(loginThunk(values))
  }

  const onFinishFailed = (errorInfo) => {}
  
  useEffect(() => {
    errMessage && message.error(errMessage, () => dispatch(nullErrorMessage()), [errMessage] )
  })
  

    return (
      <>

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
          <Input className={styles.LoginForm__input}/>
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
          <Input.Password className={styles.LoginForm__input}/>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
      </>
    )
  } 

  export default LoginForm