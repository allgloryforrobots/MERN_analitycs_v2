import React from 'react'
import { List, Typography } from 'antd'

import styles from '../styles/AssortmentList.module.scss'

const { Text } = Typography

const data = [
    { title: 'Cola', price: 200 },
    { title: 'Sprite', price: 400 }
  ]

export default function AssortmentList() {
    return (
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
    )
} 