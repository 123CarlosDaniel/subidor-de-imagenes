import { useRef } from "react";
import { uploadForm } from "../../utils/uploadForm";
import "./postData.css";

const PostData = () => {
  const form = useRef(null)

  return (
    <section>
      <form className="form" ref={form} onSubmit={(e)=> uploadForm(e,form.current)}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Titulo"
        />
        <label htmlFor="price">Precio</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Precio"
        />
        <label htmlFor="description">Descripcion</label>
        <textarea
          placeholder="Descripcion"
          name="description"
          id="description"
          cols="20"
          rows="4"
        >
        </textarea>
        <div id="div_file">
          <p id="file_text">Seleccionar Imagen</p>
          <input
            type="file"
            name="image"
            id="file"
          />
        </div>
        <button type="submit">Guardar imagen</button>
      </form>
    </section>
  );
};

export default PostData;
