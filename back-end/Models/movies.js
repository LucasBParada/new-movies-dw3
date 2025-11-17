import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    titulo:String,
    ano_lancamento:Number,
    genero:String,
    diretor:String
})

const movie = mongoose.model('movie', movieSchema)

export default movie