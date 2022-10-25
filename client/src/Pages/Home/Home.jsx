import { useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"
import useAxios from "../../hooks/useAxios"
import HomeList from "./HomeList"

const getApiUrl = "/"

const Home = () => {
  const [data, setData] = useState(null)
  const {response, error,loading} = useAxios({url:getApiUrl})
  console.log(response)
  useEffect(() => {
    if (response !== null) setData(response)
  }, [response])

  
  if (loading) {
    return (
      <Loader/>
    )
  }
  return (
    <div>
      {data!=null && <HomeList data={data} />}
    </div>
  )
}

export default Home