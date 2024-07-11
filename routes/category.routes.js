const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

// create your routes
router.get('/getall', categoryController.getAll);
router.get('/getbyid/:id', categoryController.getById);
router.post('/add', categoryController.add);
router.put('/update/:id', categoryController.update);
router.delete('/delete/:id', categoryController.deleteById);

module.exports = router;
