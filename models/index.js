const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Yashvi_hg:Yashvi@2001@cluster0.ganyu.mongodb.net/ShoppingCartDatabase?retryWrites=true&w=majority", {
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise
console.log('Database connected')

module.exports.Purchase = require("./purchase")