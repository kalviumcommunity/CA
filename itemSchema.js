const mongoose = require('mongoose')

const newItems = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model('items',newItems)