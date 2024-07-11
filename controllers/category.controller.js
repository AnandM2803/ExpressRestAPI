
const CategoryRpository = require('../repositories/category.repository');
const BaseController = require('./base.controller');

class CategoryController extends BaseController{
    constructor()
    {
        super(CategoryRpository);
       
    }
    
}

module.exports = new CategoryController();
