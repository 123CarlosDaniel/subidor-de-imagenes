import {
  updateCardService,
  getCardsService,
  createCardService,
  deleteCardService,
  getCardService,
} from '../services/postgres.service.js'
import fs from 'fs-extra'
import { deleteImage, updateImage, uploadImage } from '../utils/cloudinary.js'

export const getCards = async (req, res) => {
  const cards = await getCardsService(res)
  if (cards !== null) {
    return res.status(200).json(cards)
  }
}

export const getCard = async (req, res) => {
  const id = req.params.id
  const card = await getCardService(id, res)
  if (card !== undefined) {
    return res.status(200).json(card)
  }
  return res.sendStatus(204)
}
// usar hoppscotch para pruebas
export const createCard = async (req, res) => {
  const { title, price, description } = req.body
  try {
    if (!title || !price || !description) {
      throw new Error('Missing fields')
    }
    let imageUrl = null, imageId = null
    if (req.files?.image) {
      const image = await uploadImage(req.files.image.tempFilePath)
      imageUrl = image.secure_url
      imageId = image.public_id
    }
    const created = await createCardService(
      { title, price, description, imageUrl, imageId},
      res
    )
    if (created) {
      return res.sendStatus(201)
    }
  } catch (error) {
    if (req.files?.image) fs.unlink(req.files.image.tempFilePath)
    res.status(400).json({ error: error.message })
  }
}

export const updateCard = async (req, res) => {
  const id = req.params.id
  try {
    const card = await getCardService(id, res)
    if (card === undefined)
      return res.status(400).send({ error: 'No encontrado' })
    const { title, price, description } = req.body
    let imageUrl = null, imageId = null
    if (!req.files?.image) {
      imageUrl = card.imageurl
      imageId = card.imageid
    }
    if (req.files?.image) {
      let result 
      if (card.imageurl !== null) {
        console.log('updating')
        result = await updateImage(card.imageid, req.files.image.tempFilePath)
      } else {
        console.log('uploading')
        result = await uploadImage(req.files.image.tempFilePath)
      }
      imageUrl = result.secure_url
      imageId = result.public_id
    }
    const updated = await updateCardService(
      { title, price, description, imageUrl, imageId },
      id,
      res
    )
    if (updated) {
      return res.sendStatus(202)
    }
  } catch (error) {
    console.log(error)
    if (req.files?.image) fs.unlink(req.files.image.tempFilePath)
    res.status(400).send({ error: error.message })
  }
}

export const deleteCard = async (req, res) => {
  const id = req.params.id
  const card = await getCardService(id, res)
  if (card === undefined) return
  console.log(card)
  if (card.imageid !== null) deleteImage(card.imageid)
  const deleted = await deleteCardService(id, res)
  if (deleted) {
    return res.sendStatus(200)
  }
}
