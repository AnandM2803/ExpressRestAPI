const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

// create your routes
router.get('/getall', productController.getAll);
router.get('/getbyid/:id', productController.getById);
router.post('/add', productController.add);
router.put('/update/:id', productController.update);
router.delete('/delete/:id', productController.deleteById);

module.exports = router;
