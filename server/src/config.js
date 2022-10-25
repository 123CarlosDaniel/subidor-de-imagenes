import { config } from 'dotenv'

config()

export const envs = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.HOST,
  dbName: process.env.DATABASE_NAME,
  cloudName : process.env.CLOUD_NAME,
  apiKey : process.env.API_KEY,
  apiSecret : process.env.API_SECRET
}
