const express = require('express');
const mongoose = require('mongoose');
const router = express();
const connectToDatabase = require('../infrastructure/database/database');
var Schema = mongoose.Schema; 

connectToDatabase();

var userDataSchema = new Schema({  
    name: {type: String},  
    dateOdBithday: {type:String}
   }, {collection: 'Pessoas'}); 

   var Pessoas = mongoose.model('UserData', userDataSchema); 

router.get('/new', function(req, res, next){
    res.render('new');
});

router.post('/new', function (req, res, next) {
    var item = {  
        name: req.body.name,  
        dateOdBithday: req.body.dateOdBithday 
      }; 
      var data = new Pessoas(item);  
      data.save();
      res.redirect('/');  
}); 

router.get('/', function(req, res, next) {  
    Pessoas.find()  
    .then(function(doc) {  
      res.render('index', {items: doc});  
    });  
 });  
   
router.put('/user/:id', function (req, res) {
    res.send(`Editar um usuário com o id ${req.params.id}`);
});


module.exports = router;