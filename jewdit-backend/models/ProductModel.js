import mongoose from "mongoose";



const ProductSchema = mongoose.Schema({

  name: String,
  price: Number,
  desc: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  },
  pic: {
    type: String
  },
  catagory: String,
});


const Product = mongoose.model("Product", ProductSchema);

export default Product;
