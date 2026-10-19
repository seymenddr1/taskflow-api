const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();

    console.log(`${timestamp} - ${req.method} ${req.originalUrl}`);

    next();
});

const PORT = 3000;

const tasks = [
    {
        id: 1,
        title: "Fix login bug",
        description: "Login button does not respond",
        assignee: "John",
        status: "pending",
        priority: "high"
    }
];
let nextTaskId = 2;

app.get("/", (req, res) => {
    res.send("Welcome to TaskFlow API!");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
});

app.post("/tasks", (req, res) => {
    const newTask = {
        id: nextTaskId++,
        title: req.body.title,
        description: req.body.description,
        assignee: req.body.assignee,
        status: req.body.status,
        priority: req.body.priority
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const fields = ["title", "description", "assignee", "status", "priority"];

    fields.forEach(field => {
        if (req.body[field] !== undefined) {
            task[field] = req.body[field];
        }
    });

    res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(taskIndex, 1);

    res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});