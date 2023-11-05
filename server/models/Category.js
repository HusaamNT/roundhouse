const { Schema, Model, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category_name: {
        type: String,
        required: true
    },

});

const Category = mongoose.model('Category', prductSchema);

module.exports = Category;