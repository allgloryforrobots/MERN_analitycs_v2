import React from "react"
import { UploadOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import {
    Form,
    Button,
    Upload,
    Input,
  } from 'antd'

import styles from '../styles/AssortmentForm.module.scss'

const normFile = (e) => {
console.log('Upload event:', e)

if (Array.isArray(e)) {
    return e
}

return e && e.fileList
}

const onFinish = (values) => {
    console.log('Success:', values);
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
}

export default function AssortmentForm() {
    return (
            <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
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
                            Download Image
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="category"
                    rules={[{ required: true, message: 'Please input your category name!' }]}
                >
                    <Input 
                        addonBefore="Name" 
                        defaultValue="Drinks"
                        className={styles.assortment__input}
                    />
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        icon={<SaveOutlined />}
                    >
                        Save changes
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button 
                    danger 
                    type="primary" 
                    icon={<DeleteOutlined />}
                    >
                        Delete
                    </Button>
                </Form.Item>            
            </Form>

    )
  }    
    