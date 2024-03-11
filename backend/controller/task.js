const taskModel = require("../models/task.model.js")
const Task = taskModel.Task

exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks);
}
exports.createTask = async (req, res) => {
    const newTask = await Task.create(req.body)
    res.json(newTask)
}

exports.deleteTask = async (req, res) => {
    const id = req.params.id
    // console.log(id)
    const deletedTask = await Task.findOneAndDelete({ _id: id })
    res.json(deletedTask)
}

exports.updateTask = async (req, res) => {
    const id = req.params.id
    const updatedTask = await Task.findOneAndReplace({ _id: id }, req.body, { returnDocument: "after" })
    res.json(updatedTask)
}