const mongoose = require('mongoose')

const eventDataSchema = new mongoose.Schema({
    text: {
        type: String
    },
    color: {
        type: String
    },
    loc: {
        type: String
    }
})

let EventDataModel = mongoose.model('datas', eventDataSchema)

module.exports = EventDataModel