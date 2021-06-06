import React from 'react'
import {List} from 'antd'
import { Link } from 'react-router-dom'

const data = [
    { name: 'Cola', id: '1' },
    { name: 'Tea', id: '2' }
]

export default () => (
    <List
        size="small"
        bordered
        dataSource={data}
        renderItem={item => <List.Item> <Link to={`/assortment/${item.id}`} >{item.name}</Link> </List.Item> }
    />
)

