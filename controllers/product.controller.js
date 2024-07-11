
const ProductRpository = require('../repositories/product.repository');
const BaseController = require('./base.controller');

class ProductController extends BaseController{
    constructor()
    {
        super(ProductRpository);
       
    }
    
}

module.exports = new ProductController();
