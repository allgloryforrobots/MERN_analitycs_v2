import React from "react"
import { useSelector } from 'react-redux'
import {useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
import { Menu } from 'antd';
import {
  HomeOutlined,
  KeyOutlined,
  UserAddOutlined,
} from '@ant-design/icons'

const LayoutLayerMenu = () => {
    const isAuth = useSelector((state) => state.auth.isAuth)  
    let location = useLocation()
    if (isAuth) return (
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]} selectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
    )
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/login"]} selectedKeys={[location.pathname]}>
          <Menu.Item key="/login" icon={<KeyOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="/register" icon={<UserAddOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        </Menu>
  )

}

export default LayoutLayerMenu