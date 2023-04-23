const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    imgUrls: [String],
    brand : { type: String, required: true },
    model:{ type: String, required: true },
    description:{type:String},
    price: { type: Number, required: true, default: 0 },
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    quantity: { type: Number, required: true, default: 1 }
},  {
    timestamps: true
});

module.exports = itemSchema;
