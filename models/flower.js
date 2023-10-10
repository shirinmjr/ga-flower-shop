const { Schema } = require('mongoose');
const FlowerSchema = new Schema(
    {
        name: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { timestamps: true },
);
module.exports = FlowerSchema;
