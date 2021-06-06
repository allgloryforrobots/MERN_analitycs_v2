import React from 'react'
import styles from '../styles/AssortmentBreadcrumbs.module.scss'
import {Breadcrumb} from 'antd'


export default () => (
    <Breadcrumb
        className={styles.assortment__breadcrumb}
    >
        <Breadcrumb.Item>Category</Breadcrumb.Item>
        <Breadcrumb.Item>Edit category</Breadcrumb.Item>
    </Breadcrumb>
)

