import fs from 'fs-extra'

export const validateImage = async (req,res,next) => {
  try {
    // console.log(req.files.image)
    if (!/multipart\/form-data/.test(req.headers['content-type']) ) {
      throw new Error("Invalid file type")
    }
    if (!req.files?.image) return next()
    if (req.files.image.mimetype.includes('image')) {
      return next()
    }
    throw new Error("Only images are allowed")
  } catch (error) {
    if (req.files?.image) fs.unlink(req.files.image.tempFilePath)
    res.status(400).json({message: error.message})
  }
}

