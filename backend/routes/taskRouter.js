const express = require("express");
const { getAllTasks, createTask, deleteTask, updateTask } = require("../controller/task");
const taskRouter = express.Router()


taskRouter.get("/", getAllTasks)
    .post("/", createTask)
    .delete("/:id", deleteTask)
    .put("/:id", updateTask)


module.exports = taskRouter