const express = require('express');
const TransaccionesRouter = express.Router();
const Transacciones = require('../models/Transacciones');

//listar Transacciones
TransaccionesRouter.get("/", (req, res) => {
    Transacciones.find()
        .then(datos => res.json({Transacciones: datos}))
        .catch(error => res.json({mensaje: error}));
})

//guardar nuevo trancciones
TransaccionesRouter.post("/", (req, res) => {
    const trancciones = new Transacciones(req.body);
    trancciones.save()
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Actualizar trancciones
TransaccionesRouter.patch("/", (req, res) => {
    const trancciones = new Transacciones(req.body);
    trancciones.updateOne({_id: trancciones._id}, trancciones)
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Eliminar trancciones
TransaccionesRouter.delete("/:id", (req, res) => {
    Transacciones.deleteOne({_id: req.params.id})
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

module.exports = TransaccionesRouter;