const mongoose= require('mongoose')

const Schema=mongoose.Schema;
const objectId=mongoose.Schema.Types.ObjectId;

const productsSchema=new Schema({
    _id:{type:objectId,auto:true},
    name:{type:String,required:true},
    unitPrice:{type:Number,required:true},
    categoryId:{type:objectId,ref:'categories'}
},{
    versionKey:false,
});

const product=mongoose.model('product',productsSchema);
module.exports=product;