const express = require('express');
const PersonasRouter = express.Router();
const Personas = require('../models/Personas');

//listar personas
PersonasRouter.get("/", (req, res) => {
    Personas.find()
        .then(datos => res.json({personas: datos}))
        .catch(error => res.json({mensaje: error}));
})

//guardar nueva persona
PersonasRouter.post("/", (req, res) => {
    const persona = new Personas(req.body);
    persona.save()
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Actualizar persona
PersonasRouter.patch("/", (req, res) => {
    const persona = new Personas(req.body);
    persona.updateOne({_id: persona._id}, persona)
        .then((datos) => {
            res.json(datos);
        })
        .catch((error) => {
            res.json({ mensaje: error });
        });
});

//Eliminar persona
PersonasRouter.delete("/:id", (req, res) => {
    Personas.deleteOne({_id: req.params.id})
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

module.exports = PersonasRouter;