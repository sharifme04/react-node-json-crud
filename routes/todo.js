const express = require("express");
const todoRoute = express.Router();
const fs = require("fs");
const dayjs = require("dayjs");
const utils = require("../utils/utils.js");

const dataPath = "./data/todo.json";

todoRoute.get("/todo", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

todoRoute.post("/todo/add", (req, res) => {
  let existTodo = utils.getData(dataPath);
  const newtodoId = Math.floor(100000 + Math.random() * 900000);
  const currentDate = dayjs().format("DD-MM-YYYY");

  existTodo[newtodoId] = { ...req.body, id: newtodoId, date: currentDate };
  utils.saveData(dataPath, existTodo);
  res.send({
    status: 0,
    todoItem: existTodo[newtodoId],
    success: true,
    msg: "added successfully",
  });
});

// Read - get all accounts from the json file
// todoRoute.get("/todo/list", (req, res) => {
//   const todo = utils.getData(dataPath);
//   res.send(todo);
// });

todoRoute.put("/todo/update/:id", (req, res) => {
  let existTodo = utils.getData(dataPath);
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      const todoId = req.params["id"];
      existTodo[todoId] = req.body;

      utils.saveData(dataPath, existTodo);
      res.send({
        status: 0,
        todoItem: existTodo[todoId],
        success: true,
        msg: "updated successfully",
      });
    },
    true
  );
});

todoRoute.delete("/todo/delete/:id", (req, res) => {
  fs.readFile(
    dataPath,
    "utf8",
    (err, data) => {
      let existTodo = utils.getData(dataPath);

      const todoId = req.params["id"];

      delete existTodo[todoId];
      utils.saveData(dataPath, existTodo);
      res.send({ status: 0, text: "deleted sucessfuly", id: todoId });
    },
    true
  );
});
module.exports = todoRoute;
