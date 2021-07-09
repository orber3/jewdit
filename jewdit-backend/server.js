import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'






//env config
dotenv.config()

const PORT = process.env.PORT || 5555
const app = express()
//connects to DB
connectDB()


app.use(bodyParser.json());

//cors handle
app.use(cors())

app.use('/products', productRoutes)

//upload route
const __dirname = path.resolve()

app.use('products/uploads', express.static(path.join(__dirname , '/uploads/')))


app.listen(PORT,  console.log(  `${process.env.NODE_ENV} mode and port ${process.env.PORT}`))

app.use(express.json())

if(process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev'))
}

if(process.env.NODE_ENV === 'production') { 
    app.use(express.static(path.join(__dirname , '/jewdit-front/build')))
    app.get('*' , (req,res)=> res.sendFile(path.resolve(__dirname,'jewdit-front', 'build', 'index.html')))
}

//routes
