import axios from 'axios'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

const DeleteButton = ({ id }) => {
  const { updateRefresh } = useContext(GlobalContext)
  const handleDelete = async (id) => {
    await axios.delete(`/${id}`)
    updateRefresh()
  }

  return <button onClick={() => handleDelete(id)}>Delete</button>
}

export default DeleteButton
