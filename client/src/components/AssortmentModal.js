import React, {useState} from 'react'
import { PushpinOutlined } from '@ant-design/icons'
import {Button, Form, Modal, Input} from 'antd'

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  }
  
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 16,
    },
  }

export default () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }
  
    const onCancelHandler = () => {
      setIsModalVisible(false)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
    }
  
    const onFinish = (values) => {
      console.log('Success:', values)
      setIsModalVisible(false)
    }
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    }

    return (
        <>  
            <Modal 
              title="Add Category" 
              visible={isModalVisible} 
              footer={null}
              onCancel={handleCancel}
            >
            
            <Form
              {...layout}
              name="newPosition"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Position"
                name="position"
                rules={[{ required: true, message: `Please input your position's name!` }]}
              >
                <Input />
              </Form.Item>
    
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: `Please input your position's price!` }]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  className="mr20"
                >
                  Submit
                </Button>

                <Button
                  onClick={onCancelHandler}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Form>
            </Modal>

            <Button 
                className="mb20"
                icon={<PushpinOutlined />}
                onClick={showModal}
                >
                Add position
            </Button>
        </>
    )
}   