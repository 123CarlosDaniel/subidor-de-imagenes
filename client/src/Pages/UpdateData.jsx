import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import useAxios from '../hooks/useAxios'
import { uploadForm } from '../utils/uploadForm'

const UpdateData = () => {
  const params = useParams()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const form = useRef(null)
  const { response } = useAxios({ url: `/${params.id}` })
  const [formValue, setFormValue] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  })
  useEffect(() => {
    if (response !== null) {
      setFormValue({
        title: response.title,
        price: response.price,
        description: response.description,
        image: '',
      })
    }
  }, [response])

  return (
    <section>
      <form
        className="form"
        ref={form}
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            setLoading(true)
            await uploadForm(form.current, { method: 'PATCH', id: response.id })
            setLoading(false)
            setMessage('Updated successfully')
            setTimeout(() => {
              setMessage('')
            }, 5000)
          } catch (error) {
            console.log(error)
            setLoading(false)
            setError('Something went wrong')
            setTimeout(() => {
              setError('')
            }, 5000)
          }
        }}
      >
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Titulo"
          required
          defaultValue={formValue.title}
        />
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Precio"
          required
          defaultValue={formValue.price}
        />
        <label htmlFor="description">Descripcion</label>
        <textarea
          placeholder="Descripcion"
          name="description"
          id="description"
          cols="20"
          rows="4"
          defaultValue={formValue.description}
        ></textarea>
        <div id="div_file">
          <p id="file_text">Seleccionar Imagen</p>
          <input type="file" name="image" id="file" required />
        </div>
        <button type="submit">Guardar imagen</button>
        {loading && <Loader />}
        {message && <h2 className="message">{message}</h2>}
        {error && <h2 className="error">{error}</h2>}
      </form>
    </section>
  )
}

export default UpdateData
