import axios from 'axios'

export const uploadForm = async (
  form,
  { method, id } = {
    method: 'POST',
    id: '',
  }
) => {
  const formData = new FormData(form)
  const res = await axios({
    method,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: `http://localhost:3500/api/v1/${id}`,
  })
  form.reset()
}
