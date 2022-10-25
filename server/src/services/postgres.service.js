import pool from '../dbConnection.js'

export const getCardsService = async (res) => {
  try {
    const data = await pool.query('select * from card')
    return data.rows
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
    return null
  }
}

export const getCardService = async (cardId,res) => {
  try {
    const data = await pool.query("select * from card where id = $1", [cardId])
    return data.rows[0]
  } catch (error) {
    console.log(error.message)
    res.status(500).send({error:error.message})
    return null
  }
}

export const createCardService = async (data, res) => {
  const { title, price, description, imageUrl, imageId } = data
  try {
    await pool.query(
      'insert into card (title, price,description,imageUrl, imageId) values ($1,$2,$3,$4,$5)',
      [title, price, description, imageUrl, imageId]
    )
    return true
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
    return false
  }
}

export const updateCardService = async (data, id, res) => {
  const { title, price, description, imageUrl, imageId } = data
  try {
    await pool.query(
      'update card set title=$1, price=$2, description=$3, imageUrl=$4, imageId=$5 where id=$6',
      [title, price, description, imageUrl,imageId, id]
    )
    return true
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
    return false
  }
}

export const deleteCardService = async (id, res) => {
  try {
    await pool.query('delete from card where id = $1', [id])
    return true
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
    return false
  }
}
