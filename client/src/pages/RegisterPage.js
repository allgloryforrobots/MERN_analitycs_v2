import React from "react"
import Spin from 'antd/es/spin';
import 'antd/lib/spin/style/index.css'
import { useSelector }  from 'react-redux'

import RegisterForm from '../components/RegisterForm'


export default function RegisterPage() {
  const isLoading = useSelector((state) => state.register.loading)

    return (
      <>
        { isLoading && <Spin/> }
        <div className="toCenter">
          <RegisterForm/>
        </div>
      </>
    )
  }
  