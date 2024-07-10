const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

// create your routes
router.get('/getall', categoryController.getAll);
router.post('/add', categoryController.add);

module.exports = router;
