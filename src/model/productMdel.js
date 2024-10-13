const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    productCode: { type: String },
    productTitle: { type: String },
    productShortDescription: { type: String },
    productDescription: { type: String },
    productRate: { type: Number },
    productImage: { type: String },
    productGallery: { type: [String] },
})

module.exports = model.mongoose('Product', productSchema)
