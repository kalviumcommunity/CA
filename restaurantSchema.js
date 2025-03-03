require('dotenv').config()

const mongoose = require('mongoose')

const newRes = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    items:{
        itemsid: mongoose.SchemaType.objectID,
    }
})

module.exports = mongoose.model('restaurant',newRes)