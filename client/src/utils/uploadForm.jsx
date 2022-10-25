import axios from 'axios'

export const uploadForm = async (e, form) => {
  e.preventDefault()
  try {
    const formData = new FormData(form)
    console.log(formData)
    // const res = await axios({
    //   method: 'POST',
    //   data: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   url: 'http://localhost:3500/api/v1',
    // })
    form.reset()
  } catch (error) {
    console.log(error)
  }
}
