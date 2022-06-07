import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    brand: {
        type: String
    }
});

// The alternative to the export model pattern is the export schema pattern.
const itemsDB = mongoose.model('items', itemSchema);

export { itemsDB }