import pg from 'pg'
import { envs } from './config.js'
const { Pool } = pg

const pool = new Pool({
  host: envs.host,
  user: envs.user,
  password: envs.password,
  database: envs.dbName,
  port: envs.port,
})

export default pool
