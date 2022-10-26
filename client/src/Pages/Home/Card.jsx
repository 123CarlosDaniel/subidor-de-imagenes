import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const Card = ({ el }) => {
  const { title, imageurl, description, price, id } = el
  return (
    <div className="card">
      <h3>{title}</h3>
      {imageurl && <img src={imageurl} alt="imagen" />}
      <p>{description}</p>
      <span>{price}</span>
      <div className="buttons-container">
        <Link className="button" to={`update/${id}`}>
          Edit
        </Link>
        <DeleteButton id={id} />
      </div>
    </div>
  )
}

export default Card
