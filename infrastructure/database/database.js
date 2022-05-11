const mongoose = require('mongoose');

function connectDatabase() {
    mongoose.connect('mongodb+srv://tk:root@cluster0.4zrke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    });
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Conectado com o Banco de Dados (MongoDB)!'))
}

module.exports = connectDatabase;