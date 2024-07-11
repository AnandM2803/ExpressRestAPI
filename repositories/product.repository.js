const BaseRepository=require('./base.repository');

const product=require('../models/products.model');

class ProductsRepository extends BaseRepository{

    constructor()
    {
        super(product);
    }
}

module.exports=ProductsRepository;