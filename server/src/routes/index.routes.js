import { Router } from 'express'
import fileUpload from 'express-fileupload'
import {
  deleteCard,
  getCards,
  createCard,
  updateCard,
  getCard,
} from '../controllers/index.controller.js'
import { validateImage } from '../middlewares/image.middleware.js'

const router = Router()

const upload = fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads',
})

router.get('/', getCards)
router.get('/:id', getCard)
router.post('/', upload, validateImage, createCard)
router.patch('/:id', upload, validateImage, updateCard)
router.delete('/:id', deleteCard)

export default router
