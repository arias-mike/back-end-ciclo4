const mongoose = require("mongoose");

//conexion
mongoose.connect("mongodb+srv://root:21240385@cluster0.yiubxbo.mongodb.net/papeleria?retryWrites=true&w=majority")
    .then(evento => console.log("Conectado a mongo"))
    .catch(error => console.log(error));

module.exports = mongoose; 