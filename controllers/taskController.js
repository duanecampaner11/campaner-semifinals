// controllers/itemController.js
const tasks = require("../models/taskModel");

// Get all items
const getAllTask = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Items retrieved successfully", data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific item by ID
const getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      res
        .status(200)
        .json({ message: "Item retrieved successfully", data: task });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Add a new item
const addTask = async (req, res) => {
  try {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({ message: "Item added successfully", data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing item
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...req.body };
      res
        .status(200)
        .json({ message: "Item updated successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete an item
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      res
        .status(200)
        .json({ message: "Item deleted successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllTask,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
