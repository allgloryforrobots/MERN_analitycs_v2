import React from 'react'
import styles from '../styles/OrderIdBreadcrumbs.module.scss'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'


export default () => (
    <Breadcrumb
        className={styles.order__breadcrumb}
    >   
        <Breadcrumb.Item>
        <Link to="/orders">
            Order
        </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Add production</Breadcrumb.Item>
    </Breadcrumb>
)

