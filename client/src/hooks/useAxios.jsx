import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = "http://localhost:3500/api/v1"
const useAxios = ({url,method='GET',body,headers}) => {
  const [response, setResponse ] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
    
  useEffect(()=>{
    const controller = new AbortController()

    const fetchData = async ()=>{
      try {
        const res = await axios({
          method,
          url,
          data : body,
          headers,
          signal : controller.signal
        })
        setResponse(res.data)
      } catch (error) {
        console.log(error.message)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return ()=> {
      controller.abort()
      console.log('canceling')
    }
    
  },[method])
 
  return {response, error ,loading}
}

export default useAxios
