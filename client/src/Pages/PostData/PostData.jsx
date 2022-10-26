import { useRef, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import { uploadForm } from '../../utils/uploadForm'
import './postData.css'

const PostData = () => {
  const form = useRef(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  return (
    <section>
      <form
        className="form"
        ref={form}
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            setLoading(true)
            await uploadForm(form.current)
            setLoading(false)
            setMessage('Uploaded successfully')
            setTimeout(() => {
              setMessage('')
            }, 5000)
          } catch (error) {
            setLoading(false)
            console.log(error)
            setError('Something went wrong')
            setTimeout(() => {
              setError('')
            }, 5000)
          }
        }}
      >
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <label htmlFor="price">Precio</label>
        <input type="number" id="price" name="price" placeholder="Precio" />
        <label htmlFor="description">Descripcion</label>
        <textarea
          placeholder="Descripcion"
          name="description"
          id="description"
          cols="20"
          rows="4"
        ></textarea>
        <div id="div_file">
          <p id="file_text">Seleccionar Imagen</p>
          <input type="file" name="image" id="file" />
        </div>
        <button type="submit">Guardar imagen</button>
        {loading && <Loader />}
        {message && <h2 className="message">{message}</h2>}
        {error && <h2 className="error">{error}</h2>}
      </form>
    </section>
  )
}

export default PostData
