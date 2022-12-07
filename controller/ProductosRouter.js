const express = require('express');
const ProductosRouter = express.Router();
const Productos = require('../models/Productos');

//listar Productos
ProductosRouter.get("/", (req, res) => {
    Productos.find()
        .then(datos => res.json({Productos: datos}))
        .catch(error => res.json({mensaje: error}));
})

//guardar nuevo producto
ProductosRouter.post("/", (req, res) => {
    const producto = new Productos(req.body);
    producto.save()
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Actualizar producto
ProductosRouter.patch("/", (req, res) => {
    const producto = new Productos(req.body);
    producto.updateOne({_id: producto._id}, producto)
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Eliminar producto
ProductosRouter.delete("/:id", (req, res) => {
    Productos.deleteOne({_id: req.params.id})
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

module.exports = ProductosRouter;