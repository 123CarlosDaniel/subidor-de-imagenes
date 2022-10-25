import axios from 'axios'


const handleDelete = async(id) => {
  console.log(id);
  await axios.delete(`/${id}`)
  
};
const DeleteButton = ({ id }) => {
  return <button onClick={()=> handleDelete(id)}>Delete</button>;
};

export default DeleteButton;
