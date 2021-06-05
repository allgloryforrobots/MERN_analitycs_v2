import React from "react"
import { UploadOutlined, DeleteOutlined, SaveOutlined, PushpinOutlined } from '@ant-design/icons'
import {
    Form,
    Button,
    Upload,
    Input,
    Breadcrumb,
    Image,
    Divider,
    List,
    Typography
  } from 'antd'

import styles from '../styles/AssortmentPage.module.scss'

const { Text } = Typography

const data = [
    { title: 'Cola', price: 200 },
    { title: 'Sprite', price: 400 }
  ]

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

export default function AssortmentPage() {
    return (
        <>
        <Breadcrumb
            className={styles.assortment__breadcrumb}
        >
            <Breadcrumb.Item>Category</Breadcrumb.Item>
            <Breadcrumb.Item>Edit category</Breadcrumb.Item>
        </Breadcrumb>


        <div className="mediaColumn m0a mw500">
            <div className="mb20 mr40">
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>


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

                <Form.Item>
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
        </div>

        <div className="m0a mw500">
            <Divider 
                orientation="left"
            >
                Positions
            </Divider>
        </div>

        <div className="m0a mw500">    
            <Button 
                className="mb20"
                icon={<PushpinOutlined />}
                >
                Add position
            </Button>

            <List
                bordered
                className={styles.assortment__list}
                dataSource={data}
                renderItem={item => (   
                    <List.Item
                        actions={[<a href="/" key="list-loadmore-edit">delete</a>]}
                    >
                        <Text 
                            type="success"
                            className="mr20"
                        >
                            {item.price}
                        </Text>
                        {item.title}
                    </List.Item>
                )}
            />
        </div>

        </>
    )
  }    
    
    
    
    
    
    