import React from 'react'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'

import styles from '../styles/AssortmentBreadcrumbs.module.scss'


export default function AssortmentBreadcrumbs() {
    return (
        <Breadcrumb
            className={styles.assortment__breadcrumb}
        >   
            <Breadcrumb.Item>
            <Link to="/categories">
            Category
            </Link>
            </Breadcrumb.Item>
    
            <Breadcrumb.Item>Edit category</Breadcrumb.Item>
        </Breadcrumb>
    )
}



