const express =require("express")
const userRoute = require("./routes/usersRoutes")
const path = require("path")
const logger = require("./middlewares/user.logger")
const booksRoute = require("./routes/booksRoute")
require("dotenv").config()
const connectDB = require("./config/connectDB")
connectDB()

const app = express()

//middlewares
app.use(express.json());
app.use(logger)
app.use(userRoute)
app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
res.status(200).send("<h1>WELCOME TO THE USERS DATABASE</h1>");
})

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
})