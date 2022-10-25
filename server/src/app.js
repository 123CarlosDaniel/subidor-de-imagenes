import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/index.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
  res.send('Bienvenido a mi aplicacion')
})
app.use('/api/v1', router)

export default app
