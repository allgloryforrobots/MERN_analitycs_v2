import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'

function LocalStorageLoader() {
  const dispatch = useDispatch()
  useEffect( () => {
    const data = JSON.parse(localStorage.getItem('userData'))

    if (data && (Date.now() - (+data.createTime) < 60*60*1000) ) {
      dispatch(login(data))
    }
  }, [dispatch])
  return null
}

export default LocalStorageLoader