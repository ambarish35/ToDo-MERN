const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
exports.Task = mongoose.model("task", taskSchema)