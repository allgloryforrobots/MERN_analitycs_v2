import React from "react"
import { useSelector } from 'react-redux'
import {useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
import { Menu } from 'antd'
import {
  HomeOutlined,
  KeyOutlined,
  UserAddOutlined,
  DollarCircleOutlined,
  AreaChartOutlined,
  BookOutlined,
  PaperClipOutlined,
  FireOutlined
} from '@ant-design/icons'
import {useMedia} from 'react-use'

const LayoutLayerMenu = () => {
    const isAuth = useSelector((state) => state.auth.isAuth)  
    let location = useLocation()
    const isWide = useMedia('(min-width: 480px)')

    if (isAuth) return (

          <Menu 
            theme="dark" 
            mode={isWide ? "inline" : "horizontal"} 
          // defaultSelectedKeys={["/"]} 
            selectedKeys={[location.pathname]}
          >

            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/overview" icon={<DollarCircleOutlined />}>
              <Link to="/overview">Overview</Link>
            </Menu.Item>
            <Menu.Item key="/analitycs" icon={<AreaChartOutlined />}>
              <Link to="/analitycs">Analitycs</Link>
            </Menu.Item>
            <Menu.Item key="/history" icon={<BookOutlined />}>
              <Link to="/history">History</Link>
            </Menu.Item>
            <Menu.Item key="/order" icon={<PaperClipOutlined />}>
              <Link to="/order">Add order</Link>
            </Menu.Item>
            <Menu.Item key="/assortment" icon={<FireOutlined />}>
              <Link to="/assortment">Assortment</Link>
            </Menu.Item>
          </Menu>
    )
    return (
        <Menu 
          theme="dark" 
          mode={isWide ? "inline" : "horizontal"} 
          defaultSelectedKeys={["/login"]} 
          selectedKeys={[location.pathname]}
        >

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