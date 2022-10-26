import { useContext, useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import GlobalContext from '../../context/GlobalContext'
import useAxios from '../../hooks/useAxios'
import HomeList from './HomeList'

const getApiUrl = '/'

const Home = () => {
  const [data, setData] = useState(null)
  const { response, error, loading } = useAxios({ url: getApiUrl })
  useEffect(() => {
    if (response !== null) setData(response)
  }, [response])

  if (loading) {
    return <Loader all={true} />
  }
  return (
    <div>
      {error && <h2>errorr</h2>}
      {data != null && <HomeList data={data} />}
    </div>
  )
}

export default Home
