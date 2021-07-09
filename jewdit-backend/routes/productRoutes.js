import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import multer from 'multer'
import { createProduct, getPic, getProducts } from '../controllers/productController.js'
import path from 'path'
const router = express.Router()


  
const storage = multer.diskStorage({
  destination(req , file , cb) {
      cb(null , 'uploads/')
  } , 
  filename(req,file,cb) {
  cb(null,file.originalname
  ) },
})
function checkFileType(file , cb)
{

  const filetypes= /jpg|jpeg|png/
  const extname= filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if(extname && mimetype) { 
      return cb(null, true)
  } else{ cb('images only')}
}

router.route('/uploads/:filename')
.get(getPic)

const upcon = multer({
  storage,
  fileFilter: function(req,file,cb) { 
      checkFileType(file,cb)
  }
}).single('pic')


router.route('/')
.post( upcon , createProduct)
.get(getProducts)


router.route('/list')
.get(getProducts)




export default router



