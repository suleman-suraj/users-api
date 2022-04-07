const express =require("express")
const userRoute = require("./routes/usersRoutes")

const app = express()

//middlewares
app.use(express.json());

app.use(userRoute)

//home route
app.get("/", (req, res)=>{
res.status(200).send("<h1>WELCOME TO THE USERS DATABASE</h1>");
})

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
})