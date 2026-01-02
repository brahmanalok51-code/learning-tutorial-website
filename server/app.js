const express = require("express")
require('dotenv').config()
const app = express()
const router = require('./routes/userRoutes')
const cors = require('cors')


const PORT = process.env.PORT || 4005

app.use(express.json()) // frontend ya user se bheja data ko server padh nhi pata to ye middleware req.body me data ko lata hai aur readable bnata hai ki server use padh sake...
app.use(cors()) 
app.use(express.urlencoded({extended  : false}))
app.use(router) // iss middleware ka use kr ke hm app.js ko bta rhe hai ki hmne routes bnaya hai router folder me..const router = require('./routes/userRoutes')...isiliye yha router ko pass kiya hai routes ko import kr ke..



app.listen(PORT, ()=>{
    console.log(`server is running on the port ${PORT}`)
})