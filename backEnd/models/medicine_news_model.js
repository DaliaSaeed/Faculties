const mongoose = require("mongoose")
const validator = require('validator')
const path = require("path")
const fs = require("fs")

const MedicineNewsSchema = mongoose.Schema({
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
    image:[
        {
            fieldname: {type:String},
            originalname: {type:String},
            filename: {type:String},
            name:{type:String},
            path: {type:String}
        }
    ],
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
},{
    timestamps: true
})



const MedicineNews = new mongoose.model('MedicineNews', MedicineNewsSchema)

module.exports = MedicineNews