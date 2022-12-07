const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const PersonasRouter = require('./controller/PersonasRouter');
const UsuariosRouter = require('./controller/UsuariosRouter');
const TransaccionesRouter = require('./controller/TransaccionesRouter');
const ProductosRouter = require('./controller/ProductosRouter');
const app = express();

app.use(cors());
app.use(bodyParser.json());

//personas router
app.use("/personas", PersonasRouter);

// Usuarios router 
app.use("/usuarios", UsuariosRouter);

//productos router
app.use("/productos", ProductosRouter);

// transacciones router 
app.use("/transacciones", TransaccionesRouter);

app.listen(5000);