
const mongoose = require("mongoose") // requiring the mongoose package

const purchaseSchema = new mongoose.Schema({
  // creating a schema for todo
  name: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: true, // it is required
  },
    email: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: true, // it is required
  },
  card: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: true, // it is required
  },
  amount: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: true, // it is required
  },
})

const purchaseModel = mongoose.model("ShoppingCartDatabase", purchaseSchema) // creating the model from the schema

module.exports = purchaseModel // exporting the model