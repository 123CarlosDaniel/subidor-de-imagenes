import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

axios.defaults.baseURL = 'http://localhost:3500/api/v1'
const useAxios = ({ url, method = 'GET', body, headers }) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { refresh } = useContext(GlobalContext)
  useEffect(() => {
    const controller = new AbortController()
    console.log({ refresh }, 'gawgwagwagwa')
    const fetchData = async () => {
      try {
        const res = await axios({
          method,
          url,
          data: body,
          headers,
          signal: controller.signal,
        })
        setResponse(res.data)
        setError('')
      } catch (error) {
        console.log(error.message)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [method, refresh])

  return { response, error, loading }
}

export default useAxios
