const { Schema, Model } = require("mongoose");

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
