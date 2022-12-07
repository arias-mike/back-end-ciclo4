const express = require('express');
const UsuariosRouter = express.Router();
const Usuarios = require('../models/Usuarios');

//listar Usuarios
UsuariosRouter.get("/", (req, res) => {
    Usuarios.find()
        .then(datos => res.json({Usuarios: datos}))
        .catch(error => res.json({mensaje: error}));
})

//guardar nuevo usuario
UsuariosRouter.post("/", (req, res) => {
    const usuario = new Usuarios(req.body);
    const persona = new Personas({correo: usuario.persona.correo});
    persona.save()
        .then(datos => {
            usuario.persona._id = datos._id;
            usuario.save()
                .then(datos => res.json(datos))
                .catch(error => res.json({ mensaje: error }));
        })
        .catch(error =>{
            if(error.code == 11000){
                Personas.findOne({correo: usuario.persona.correo})
                    .then(datos => {
                        usuario.persona._id = datos._id;
                        usuario.save()
                            .then(datos => res.json(datos))
                            .catch(error => res.json({ mensaje: error }));
                    })
            }
            else{
                res.json({mensaje:error})
            }
        })
});

//Actualizar usuario
UsuariosRouter.patch("/", (req, res) => {
    const usuario = new Usuarios(req.body);
    usuario.updateOne({_id: usuario._id}, usuario)
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

//Eliminar usuario
UsuariosRouter.delete("/:id", (req, res) => {
    Usuarios.deleteOne({_id: req.params.id})
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

UsuariosRouter.post("/login", (req, res) => {
    Usuarios.findOne({usaurio: req.body.usuario, clave: req.body.clave})
    .then((datos) => {
        res.json(datos);
    })
    .catch((error) => {
        res.json({ mensaje: error });
    });
});

module.exports = UsuariosRouter;