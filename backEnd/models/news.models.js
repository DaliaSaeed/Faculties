const mongoose = require("mongoose")
const validator = require('validator')

const NewsSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxlenght: 40,
        trim: true
    },
    content:{
        type: String,
        trim: true,
        required: true

    },
    date:{
        type:Date
    },
    img:{
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const news = new mongoose.model('News', NewsSchema)

module.exports = news