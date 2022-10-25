import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home/Home"
import PostData from "./Pages/PostData/PostData"
import UpdateData from "./Pages/UpdateData"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<PostData/>}/>
      <Route path="/update/:id" element={<UpdateData/>}/>
    </Routes>
    </>
  )
}

export default App
