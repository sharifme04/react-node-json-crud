const express = require("express")
const router = express.Router();
const fs = require('fs');
const todoRoute = require('./todo.js')

router.use(todoRoute)
module.exports = router;