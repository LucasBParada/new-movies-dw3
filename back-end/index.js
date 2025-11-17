import express from "express"
import mongoose from "mongoose"
import movie from "./Models/movies.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/api-movies")

app.get("/", async (req,res) => {
    try{
        const movies = await movie.find()
        res.status(200).json({movies:movies})
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno no servidor."})
    }
})

const port = 4000
app.listen(port,(error) => {
    if(error){
        console.log(error)
    }
    console.log(`Sua API está rodando em: ${port}`)
})

