import Product from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";
import path from "path";


const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    catagory,
    desc,
    price,
  } = req.body;
  const pic =  req.file.filename

  const product = new Product({
    name,
    catagory,
    desc,
    price,
    pic
  });

  const createdProduct = await product.save();
  if(createdProduct) { 
  res.send(createdProduct);
  }
    else { 
        res.status(400)
        throw new Error ('check your form - something is missing.')
    }

  
});

//get all products

const getProducts = asyncHandler(async (req, res) => {

  let responseMsg = {}

  try { 
    const products = await Product.find();
    responseMsg = {
      data: products,
      status: 200
    };
    
  }catch(e) { 
    responseMsg = {
      data: e,
      status: 422
    };

    console.log(e)
  }


  res.status(responseMsg.status).json(responseMsg);
});


//get pictures

const getPic = asyncHandler(async (req, res) => {
  const { filename } = req.params;
console.log('getpic')
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname,`jewdit-backend/uploads/${filename}`);
  console.log(fullfilepath)

  return res.sendFile(fullfilepath)

})


export { createProduct, getProducts, getPic };



