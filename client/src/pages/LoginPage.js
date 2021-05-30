import React from "react"
import LoginForm from '../components/LoginForm'
import Spin from 'antd/es/spin'
import 'antd/lib/spin/style/index.css'
import { useSelector }  from 'react-redux'

export default function LoginPage() {
    const isLoading = useSelector((state) => state.auth.loading)

    return (
        <>
            { isLoading && <Spin/> }
            <div className="toCenter">
                <LoginForm/>
            </div>
            </>
        
    )
  }




