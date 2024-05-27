const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");


//CREATE TASK
router.post("/create", async(req, res) => {
    try {
        const task = await Task.create({...req.body, completed: false });
        res.status(201).send({ message: "Task successfully created", task });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a task" });
    }
});

//GET TASKS
router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to get tasks" });
    }
});

//GET TASK BY ID
router.get("/id/:_id", async(req, res) => {
    try {
        const _id = req.params._id;
        const task = await Task.findById({_id});
        res.status(200).send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was a problem with the task with _id number: " +
                req.params._id,
        });
    }
});

//MARK TASK AS COMPLETED (en este endpoint no le permitimos que edite el titulo)
router.put("/markAsCompleted/:_id", async(req, res) => {
        try {
            const _id = req.params._id;
            const task = await Task.findByIdAndUpdate( {_id}, { completed: true }, { new: true });
            res.status(200).send({ message: "Task successfully updated", task });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "There was a problem trying to update the task with _id: " +
                    req.params._id,
            });
        }
    });

    //UPDATE TASK

    router.put("/id/:_id", async(req, res) => {
        try {
            const _id = req.params._id;
            const {title} = req.body;
            const task = await Task.findByIdAndUpdate({_id},{ $set: { title: `${title}`}})
            res.status(200).send({ message: "task successfully updated"});
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem trying to updated task" });
        }
    });

    //DELETE TASK

    router.delete("/id/:_id", async(req, res) => {
        try {
            const task = await Task.findByIdAndDelete(req.params._id);
            res.status(200).send({ message: "task deleted", task });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem trying to delete a task" });
        }
    });
    
module.exports = router;