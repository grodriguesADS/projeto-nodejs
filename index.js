const express = require('express');
const sequelize = require('./infrastructure/configuration/connect-database');

const { USER_REGISTRATION_MODEL } = require('./infrastructure/database/model/user-model/user-registration-model');
const app = express();
USER_REGISTRATION_MODEL.sync();

app.get('/', function(req,  res){
    res.send('Hello Word');
}) 


app.listen(3001, () => console.log("Server funcionando na porta 3001"))