import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {falseRedirect} from '../redux/registerSlice'
import {Redirect} from 'react-router-dom'
import  {message} from 'antd'

export default function RegisterRedirect() {
    const dispatch = useDispatch()

    useEffect(() => {
        message.success('Войдите со своим логином и паролем')
      })

    useEffect(() => {
        dispatch(falseRedirect())
    }, [dispatch])

    return <Redirect to="/login" />
}