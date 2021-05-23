import React from "react";
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'


import { logout } from '../redux/authSlice'
import LayoutLayerMenu from './LayoutLayerMenu'
import styles from '../styles/LayoutLayer.module.scss'

const { Header, Sider, Content } = Layout

function LayoutLayer (props) {
  let [ collapsed, setCollapsed ] = React.useState(false)
  let isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()


  let toggle = () => {
    setCollapsed(!collapsed)
  }

  const onLogoutHandler = async (e) => {
    e.preventDefault()
    await localStorage.removeItem('userData')
    dispatch(logout())
  }

    return (
      <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo} />

          <LayoutLayerMenu/>
        </Sider>
        <Layout className={styles.layout}>
          <Header className={styles.layout__background} style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: toggle,
            })}

            {isAuth && <a href="/" onClick={onLogoutHandler} style={{ marginRight: 20 }}>Выйти</a>}
          </Header>
          <Content
            className={styles.layout__background}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    )

}


export default LayoutLayer