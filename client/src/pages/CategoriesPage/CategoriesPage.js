import React, { useState } from 'react'
import { Divider, Button, Modal, Form, Input, Upload } from 'antd'
import { PushpinOutlined, UploadOutlined } from '@ant-design/icons'

import CategoriesList from './components/CategoriesList'

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

const normFile = (e) => {
  console.log('Upload event:', e)
  
  if (Array.isArray(e)) {
      return e
  }
  
  return e && e.fileList
  }


export default function CategoriesPage() {
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
          <div className="m0a mw500">

            <Modal 
              title="Add Category" 
              visible={isModalVisible} 
              footer={null}
              onCancel={handleCancel}
            >
            
            <Form
              {...layout}
              name="newCategory"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: `Please input your category's name!` }]}
              >
                <Input />
              </Form.Item>
    
              <Form.Item  
                label="Category Image"
                    name="upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload   
                        name="logo" 
                        action="/upload.do" 
                        listType="picture"
                    >
                        <Button icon={<UploadOutlined />}>
                            Download
                        </Button>
                    </Upload>
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


            <Divider orientation="left">Categories</Divider>

            <Button 
              className="mb20"
              onClick={showModal}
              icon={<PushpinOutlined />}
            >
              Add category
            </Button>

          <CategoriesList/>
          </div>
  )

}