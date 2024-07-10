const { StatusCodes } = require('http-status-codes');
const Category = require('../models/category.model');

class CategoryController {
    getAll = (req, res) => {
        Category.find()
            .then(docs => {
                return res.status(StatusCodes.OK).send(docs);
            })
            .catch(err => {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server error' });
            });
    }

    add = (req, res) => {
        const body = req.body;
        Category.create(body)
            .then(doc => {
                return res.status(StatusCodes.CREATED).send(doc);
            })
            .catch(err => {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                    message: 'Internal Server Error'
                });
            });
    }
}

module.exports = new CategoryController();
