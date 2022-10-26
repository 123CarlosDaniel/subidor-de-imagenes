import { v2 as cloudinary } from 'cloudinary'
import { envs } from '../config.js'
import fs from 'fs-extra'
cloudinary.config({
  cloud_name: envs.cloudName,
  api_key: envs.apiKey,
  api_secret: envs.apiSecret,
})

export const uploadImage = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'images-dev',
  })
  fs.unlink(filePath)
  return result
}

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}

export const updateImage = async (public_id, filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    public_id,
  })
  fs.unlink(filePath)
  return result
}
