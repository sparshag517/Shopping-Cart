if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var mongodb= require('mongodb'); 
var dbConn = mongodb.MongoClient.connect('mongodb+srv://Yashvi_hg:Yashvi@2001@cluster0.ganyu.mongodb.net/ShoppingCartDatabase?retryWrites=true&w=majority');

const express = require('express')
const db= require('./models/')

const app = express();
const fs = require('fs');


app.set('view engine', 'ejs');

app.use(express.json())

app.use(express.static('public'));


app.get('/', function(req,res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end();
        }
        else{
            res.render('store.ejs', {
              
                items: JSON.parse(data)
            })
        }
    })
})
app.get('/payment', function(req,res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end();
        }
        else{
            res.render('payment.ejs', {
             items: JSON.parse(data) 
            })
        }
    })
})
app.post('/purchase', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('sessions').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});


const port = 3000;

app.listen(port, ()=>{
    console.log('Server started');
});